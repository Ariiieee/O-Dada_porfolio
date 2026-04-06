import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import TitleHeader from '../TitleHeader'
import { expCards } from '../../constants'
import GlowCard from './GlowCard'

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
   useGSAP(() => {
      gsap.utils.toArray(".timeline-card").forEach((card) => {
         gsap.from(card, {
            xPercent: -100,
            opacity: 0,
            transformOrigin: "left left",
            duration: 1,
            ease: "power2.inOut", //speed of the animation
            scrollTrigger: {
               trigger: card,
               start: "top 80%",
            }

         })
      })

      gsap.to(".timeline", {
         transformOrigin: "bottom bottom",
         ease: "power1.inOut",
         duration: 1,
         scrollTrigger: {
            trigger: ".timeline",
            start: "top center",
            end: "70% center",
            onUpdate: (self) => {
               gsap.to(".timeline", {
                  scaleY: 1 - self.progress,
               })
            }
         }
      })

      gsap.utils.toArray(".expText").forEach((text) => {
         gsap.from(text, {
            xPercent: 0,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut", //speed of the animation
            scrollTrigger: {
               trigger: text,
               start: "top 60%",
            }

         })
      })
   }, [])


   return (
      <section
         id="experience"
         className="w-full md:mt-40 mt-20 section-padding xl:px-0"
      >
         <div className="w-full h-full md:px-20 px-5">
            <TitleHeader
               title="Professional Work Experience"
               subtitle="💼 My Career Overview"
            />

            <div className="mt-32 relative">
               <div className="relative z-50 xl:space-y-32 space-y-10">
                  {expCards.map((card, index) => (
                     <div
                        key={card.title} className="exp-card-wrapper"
                     >
                        <div className="xl:w-2/6">
                           <GlowCard card={card} index={index}>
                              <div>
                                 <img src={card.imgPath} alt={card.title} />
                              </div>
                           </GlowCard>
                        </div>

                        <div className="xl:w-4/6">
                           <div className="flex items-start">
                              <div className="timeline-wrapper">
                                 <div className="timeline" />
                                 <div className="gradient-line w-1 h-full" />
                              </div>

                              <div
                                 className="expText flex xl:gap-30 md:gap-10 gap-5 relative z-30"
                              >
                                 <div className="timeline-logo">
                                    <img src={card.logoPath} alt="logo" />
                                 </div>
                                 <div>
                                    <h1 className="font-semibold text-3xl">{card.title}</h1>
                                    <p className="my-5 text-white-50">🗓️{card.date}</p>
                                    <p className="text-[#839cb5] italic">Responsibilities</p>
                                    <ul
                                       className="list-disc ms-5 m-5 flex flex-col gap-5 text-white-50"
                                    >
                                       {card.responsibilities.map((responsibility, i) => (
                                          <li key={i} className="text-lg">
                                             {responsibility}
                                          </li>
                                       ))}
                                    </ul>
                                 </div>

                              </div>

                           </div>
                        </div>
                     </div>
                  ))}

               </div>
            </div>

         </div>
      </section>
   )
}

export default ExperienceSection

//note: for the experience section,
//you will add Team lead for userspace


//note for the experience section,
//- use strong action verbs like - developed, optimized, implemented, collaborated,achieve for specific performance
//-bring in some tangible metrics like achievable results so instead of generic metrics like improved performance, bring in specific metrics like increase in conversion rate by 10% or reduce in bounce rate by 20%, like how much performance have you improved - be specific to a percentage or a number
//try to be specific in what I did as this improve the credibility of the candidate and the project you built