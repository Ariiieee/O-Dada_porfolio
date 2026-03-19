
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
   const sectionRef = useRef(null);
   const projectOneRef = useRef(null);
   const projectTwoRef = useRef(null);
   const projectThreeRef = useRef(null);


   {/* everything in this block of code runs only once when the component mounts */ }
   useGSAP(() => {

      {/*animate each project on scroll*/ }
      const projects = [projectOneRef.current, projectTwoRef.current, projectThreeRef.current];

      {/* gathering them through an array, loop through each one and creating a scroll animation  */ }
      projects.forEach((project, index) => {
         gsap.fromTo(
            project,
            {
               y: 50,
               opacity: 0
            },
            {
               y: 0,
               opacity: 1,
               duration: 1,
               delay: 0.3 * (index + 1),
               scrollTrigger: {
                  /* when you reach each portion of the screen , when do you want to trigger it,
                   note: the trigger is the card, animate when the card enters the viewport i.e start when the top of the card nears the bottom of the screen
                   */
                  trigger: project,
                  start: "top bottom-=100"
               }
            }
         )
      })

      {/* fade in the entire section that shows these different projects */ }
      {/* the first parameter is the reference to a div you want to animate, then pass from which animation you want to go 
         i.e from opacity 0, and to third parameter you pass where you want to go, from opacity 1 to duration 1.5 sec */}
      gsap.fromTo(
         sectionRef.current,
         { opacity: 0 },
         { opacity: 1, duration: 1.5 }
      )

   }, [])


   return (
      <section
         ref={sectionRef}
         id="work"
         className="app-showcase"
      >
         <div className="w-full">
            <div className="showcaselayout">
               {/*Left: Showcase Content*/}
               <div className="first-project-wrapper" ref={projectOneRef}>
                  <div className="image-wrapper">
                     <img src="/images/project1.png" alt="Ryde" />
                  </div>
                  <div className="text-content">
                     <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
                     <p className="test-white-50 md:text-xl">
                        An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly  experience.
                        {/*talk about the technologies used here or what obstacles you encountered while developing it */}
                     </p>
                  </div>
               </div>

               {/*Right: Showcase Content*/}
               <div className="project-list-wrapper overflow-hidden">
                  <div className="project" ref={projectTwoRef}>
                     <div className="image-wrapper bg-[#ffefdb]">
                        <img src="/images/project2.png" alt="library management Platform" />
                     </div>
                     <h2>Library Management Platform</h2>
                  </div>

                  <div className="project" ref={projectThreeRef}>
                     <div className="image-wrapper bg-[#ffe7eb]">
                        <img src="/images/project3.png" alt="YC Directory" />
                     </div>
                     <h2>YC Directory - A Startup Showcase App</h2>
                     {/*note put your projects here instead */}
                  </div>
               </div>

            </div>

         </div>
      </section>
   )
}

export default ShowcaseSection