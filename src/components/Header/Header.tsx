import { CtaButton } from "../CtaButton/CtaButton"
import AlanPhoto from '../../assets/img/ap-photos/portfolio-img-fondo.png';
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import './HeaderStyles.css';

export const Header = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <header className="header-container container">
      <div className="header-text-container">
        <div className="text-container">
          <h2 className="header-title">
            Transformo tus ideas en experiencias visuales digitales únicas
          </h2>
          <p className="description">
            Desde el diseño hasta el desarrollo, combino creatividad y
            funcionalidad para que tu marca se destaque.
          </p>
        </div>

        <div className="cta-container">
          <CtaButton className="contact-btn primary" href="#projects">Ver Proyectos</CtaButton>
          <CtaButton className={`contact-btn ${(theme === 'light') ? 'secondary' : 'white'}`} href="mailto:alanpinon32@gmail.com">Contacto</CtaButton>
        </div>

      </div>
      <img className="header-img" src={AlanPhoto} alt="Foto de Alan Piñón" />
    </header>
  )
}