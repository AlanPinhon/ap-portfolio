import { useContext, useEffect, useRef, useState } from 'react';
import LightLogo from '../../assets/img/ap-logos/black-logo-ap-horizontal.svg';
import DarkLogo from '../../assets/img/ap-logos/white-logo-ap-horizontal.svg';
import { ThemeContext } from '../../context/ThemeContext';
import { Icon } from '../../assets/icons/Icon';
import './NavbarStyles.css'

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const {theme, setTheme, setThemeMode} = useContext(ThemeContext);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleThemeMenu = () => setIsThemeMenuOpen(!isThemeMenuOpen);
  const closeMenu = () => setIsOpen(false);
  
  const toggleTheme = (selectedTheme: string) => {
    if(selectedTheme === 'system') {
      setThemeMode('system')
      localStorage.setItem('themeMode', 'system');

      const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = prefersDarkTheme ? 'dark' : 'light';

      setTheme(systemTheme);
      localStorage.setItem('theme', systemTheme);
    } else {
      setTheme(selectedTheme);
      setThemeMode('manual');
      localStorage.setItem('theme', selectedTheme);
      localStorage.setItem('themeMode', 'manual');
    }
    setIsThemeMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if(!containerRef.current?.contains(e.target as Node)){
        setIsThemeMenuOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  
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

        <div className="separator"></div>

        <div ref={containerRef} className="theme-menu-container">
          <button onClick={toggleThemeMenu} className="theme-btn">
            <Icon name={(theme === 'light') ? 'LightIcon' : 'DarkIcon'}/>
          </button>
          <div ref={menuRef} className={`theme-menu ${isThemeMenuOpen ? 'open' : ''}`}>
            <button onClick={() => toggleTheme('light')} className="theme-option">Light</button>
            <button onClick={() => toggleTheme('dark')} className="theme-option">Dark</button>
            <button onClick={() => toggleTheme('system')} className="theme-option">Sistema</button>
          </div>
        </div>
      </nav>

    </section>
  )
}