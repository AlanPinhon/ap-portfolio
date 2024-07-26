import { useContext, useEffect, useState } from 'react';
import LightLogo from '../../assets/img/ap-logos/logo-ap-1.svg';
import DarkLogo from '../../assets/img/ap-logos/logo-ap-2.svg';
import { ThemeContext } from '../../context/ThemeContext';
import { Icon } from '../../assets/icons/Icon';
import './NavbarStyles.css'

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);
  document.querySelector('body')?.setAttribute('data-theme', theme);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.querySelector('body')?.toggleAttribute('data-theme');
    localStorage.setItem('theme', newTheme);
  };
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
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
    <section id="navbar" className="nav-container container">

    <img className="nav-ap-logo" src={(theme === 'light') ? LightLogo : DarkLogo }  alt="ap-logo"/>
    <button onClick={toggleMenu} className="menu-btn">
      <Icon name={isOpen ? 'CloseIcon' : 'HamburgerIcon'} className={isOpen ? 'rotate' : ''}/>
    </button>
    
    <nav className={`header-nav ${isOpen ? 'show' : ''}`}>
      <a onClick={closeMenu} className="header-nav-link" href="#about-me">Sobre mi</a>
      <a onClick={closeMenu} className="header-nav-link" href="#experience">Experiencia</a>
      <a onClick={closeMenu} className="header-nav-link" href="#projects">Proyectos</a>
      <a onClick={closeMenu} className="header-nav-link" href="#contact"> Contacto </a>
    </nav>

    <button onClick={toggleTheme} className="theme-btn">
      {(theme === 'light') ? <Icon name='DarkIcon'/> : <Icon name='LightIcon'/>}
    </button>
    
  </section>
  )
}