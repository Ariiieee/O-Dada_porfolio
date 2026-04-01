import React from 'react'
import { useRef } from 'react'

const GlowCard = ({ card, children, index }) => {
   /*I want to make the glow around the card follow the mouse cursor - this will be knowing the position of the cursor*/
   const cardRefs = useRef([])


   {/* this is an higher order function --what is an higher order function? first we need to figure out which card is being hovered over and then get access to the event of the actual mouse so that move event and once we have that we can figure out which card we on */ }
   const handleMouseMove = (index) => (e) => {
      const card = cardRefs.current[index]
      if (!card) return;

      //get the mouse position relative to the card
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      //calculate the angle from the center of the card.
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)

      //adjust the angle so it's between 0 and 360
      angle = (angle + 360) % 360;

      //set the angle has a CSS variable
      card.style.setProperty("--start", angle + 60)

   }

   return (
      <div
         /*depending on the element, we are on, we will only move for that specific card*/
         ref={(el) => (cardRefs.current[index] = el)}
         onMouseMove={handleMouseMove(index)}
         className="card card-border timeline-card rounded-xl p-10"
      >
         <div className="glow" />
         <div className="flex items-center gap-1 mb-5">
            {Array.from({ length: 5 }, (_, i) => (
               <img
                  src="/images/star.png"
                  key={i}
                  alt="star"
                  className="size-5"
               />
            ))}
         </div>
         <div className="mb-5">
            <p
               className="text-white-50" text-lg
            >
               {card.review}
            </p>
         </div>
         {children}
      </div>
   )
}

export default GlowCard

{/*note:
    when preparing for interviews, ask ai to give you a list of questions to ask the candidate according to the project you built
    */ }