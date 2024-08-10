import { AboutMe } from "./components/AboutMe/AboutMe"
import { Contact} from "./components/Contact/Contact"
import { Experience } from "./components/Experience/Experience"
import { Footer } from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { ThemeProvider } from "./context/ThemeProvider"

export const App = () => (
  <ThemeProvider>
    <div id="home" className="back-gradient"></div>
    <Navbar/>
    <AboutMe/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
  </ThemeProvider>
)