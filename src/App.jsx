import NavBar from "./components/NavBar"
import Hero from "./components/sections/Hero"
import ShowcaseSection from "./components/sections/ShowcaseSection"
import LogoSection from "./components/sections/LogoSection"
import FeaturesCards from "./components/sections/FeaturesCards"
import ExperienceSection from "./components/sections/ExperienceSection"
import TechStack from "./components/sections/TechStack"

const App = () => {
   return (
      <>
         <NavBar />
         <Hero />
         <ShowcaseSection />
         <LogoSection />
         <FeaturesCards />
         <ExperienceSection />
         <TechStack />

      </>
   )
}

export default App