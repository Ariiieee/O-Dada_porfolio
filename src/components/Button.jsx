import React from 'react'

const Button = ({ className, id, text }) => {
   return (
      <a
         onClick={(e) => {
            e.preventDefault(); /* prevent the default behavior of the browser i.e to reload the screen when we click on an element */

            const target = document.getElementById("counter") /* target is the element we want to scroll to - we scroll to whatever id we define which is in this case it is the counter */

            /* only scroll if we find the element and id */
            if (target && id) {
               /* offset figures a way to leave a space at the top */
               const offset = window.innerHeight * 0.15;

               /* how far down we need to scroll */
               const top = target.getBoundingClientRect().top + window.scrollY - offset; /*we want to leave some space on the elements for them to appear nicely on the screen */
               window.scrollTo({
                  top,
                  behavior: "smooth",
               });
            }

         }}
         className={`${className ?? ''} cta-wrapper`}>
         <div className="cta-button group">
            <div className="bg-circle" />
            <p className="text">{text}</p>
            <div className="arrow-wrapper">
               <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
         </div>
      </a>
   )
}

export default Button