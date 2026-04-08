import React from 'react'

import { techStackIcons } from '../../constants'

import TechIcon from '../Models/TechLogos/TechIcon'
import TitleHeader from '../TitleHeader'

const TechStack = () => {
   return (
      <div id="skills" className="flex-center section-padding">
         <div className="w-full h-full md:px-10 px-5">
            <TitleHeader
               title="My Preferred Tech Stack"
               subtitle="🫱🏼‍🫲🏼 The Skills I Bring to the Table"
            />

            <div className="tech-grid">
               {techStackIcons.map((icon, i) => (
                  <div key={i}
                     className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                  >
                     <div className="tech-card-animated-bg" />
                     <div className="tech-card-content">
                        <div className="tech-icon-wrapper">
                           <TechIcon model={icon} />
                        </div>

                        <div className="Padding-x w-full">
                           <p>{icon.name}</p>
                        </div>

                     </div>

                  </div>
               ))}

            </div>
         </div>
      </div>
   )
}

export default TechStack