import { AboutMe } from "./components/AboutMe/AboutMe"
import { Contact} from "./components/Contact/Contact"
import { Experience } from "./components/Experience/Experience"
import { Footer } from "./components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { Skills } from "./components/Skills/Skills"
import { ThemeProvider } from "./context/ThemeProvider"

export const App = () => (
  <ThemeProvider>
    <Navbar/>
    {/* <Hero/> */}
    {/* <AboutMe/> */}
    {/* <Experience/> */}
    {/* <Skills/> */}
    {/* <Projects/> */}
    {/* <Contact/> */}
    {/* <Footer/> */}
  </ThemeProvider>
)