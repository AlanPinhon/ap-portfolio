import { AboutMe } from "./components/AboutMe/AboutMe"
import { Contact} from "./components/Contact/Contact"
import { Experience } from "./components/Experience/Experience"
import { Footer } from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { ThemeProvider } from "./context/ThemeProvider"
import { Header } from './components/Header/Header';

export const App = () => (
  <ThemeProvider>
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Experience/>
    <Projects/>
    <Contact/>
    {/* <Footer/> */}
  </ThemeProvider>
)