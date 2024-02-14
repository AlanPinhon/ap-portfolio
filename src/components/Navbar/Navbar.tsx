import { useContext, useEffect } from 'react';
import LightLogo from '../../assets/img/ap-logos/logo-ap-1.svg'
import DarkLogo from '../../assets/img/ap-logos/logo-ap-2.svg'
import Sun from '../../assets/img/theme-icons/sun.svg'
import Moon from '../../assets/img/theme-icons/moon.svg'
import { ThemeContext } from '../../context/ThemeContext';
import './NavbarStyles.css'

export const Navbar = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  document.querySelector('body')?.setAttribute('data-theme', theme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.querySelector('body')?.toggleAttribute('data-theme');
    localStorage.setItem('theme', newTheme);
  };
  

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      const newTheme = query.matches ? 'dark' : 'light';
      setTheme(newTheme);
      document.querySelector('body')?.setAttribute('data-theme', theme);
      localStorage.setItem('theme', newTheme);
    };

    query.addEventListener('change', handleChange);

    return () => {
      query.removeEventListener('change', handleChange);
    };
  }, [theme, setTheme])

  return (
    <section className="nav-container container">

    <button onClick={toggleTheme} className="theme-btn">
      <img src={(theme === 'light') ? Moon : Sun} alt="theme-icon" />
    </button>

    <img className="nav-ap-logo" src={(theme === 'light') ? LightLogo : DarkLogo }  alt="ap-logo"/>
    
    <nav className="header-nav">
      <a className="header-nav-link" href="#about-me">Sobre mi</a>
      <a className="header-nav-link" href="#projects">Proyectos</a>
      <a className="header-nav-link" href="#contact"> Contacto </a>
    </nav>

  </section>
  )
}