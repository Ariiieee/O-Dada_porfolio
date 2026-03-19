import React from 'react'
import { myLogoIconsList } from '../../constants'

const LogoIcon = ({ icon }) => {
   return (
      <div className="flex-none flex-center marquee-item">
         <img src={icon.imgPath} alt={icon.name}
            className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
         />
      </div>
   )
}

const LogoSection = () => {
   return (
      <div className="md:my-20 my-10 relative">
         <div className="gradient-edge" />
         <div className="gradient-edge" />

         <div className="marquee h-52">
            {/* duplicating the logos -when the first list of logos scrolls out, the second continues seamlessly */}
            <div className="marquee-box md-gap-12 gap-5">
               {myLogoIconsList.map((icon, index) => (
                  <LogoIcon key={index} icon={icon} />
               ))}
               {myLogoIconsList.map((icon, index) => (
                  <LogoIcon key={index} icon={icon} />
               ))}
               {myLogoIconsList.map((icon, index) => (
                  <LogoIcon key={index} icon={icon} />
               ))}

            </div>
         </div>
      </div>
   )
}

export default LogoSection