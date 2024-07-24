import { AboutMe } from "./components/AboutMe/AboutMe"
import { Contact} from "./components/Contact/Contact"
import { Experience } from "./components/Experience/Experience"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { ThemeProvider } from "./context/ThemeProvider"
import { ArrowButton } from './components/ArrowButton/ArrowButton';

export const App = () => (
  <ThemeProvider>
    <div id="home" className="back-gradient"></div>
    <ArrowButton/>
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
  </ThemeProvider>
)