import { useContext } from 'react';
import LightLogo from '../../assets/img/ap-logos/logo-ap-1.svg';
import DarkLogo from '../../assets/img/ap-logos/logo-ap-2.svg';
import { ContactButton } from '../ContactButton/ContactButton';
import './ContactStyles.css';
import { ThemeContext } from '../../context/ThemeContext';

export const Contact = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <section id="contact" className="contact-container container">
      <div className="contact-info">

        <div className="logo-container">
          <img src={(theme === 'light' ? DarkLogo : LightLogo)} alt="ap_logo" className="nav-ap-logo" />
        </div>

        <div className="contact-me-text">
          <h3 className="contact-me">¡Colaboremos juntos!</h3>
          <p className="contact-me-text">
            Estoy disponible para discutir oportunidades
            <br />
            profesionales y responder a cualquier pregunta.
          </p>
        </div> 

        <ContactButton/>
        
      </div>

    </section>
  )
}