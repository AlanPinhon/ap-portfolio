import AlanPhoto from '../../assets/img/ap-photos/about-me-photo.webp';
import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks';
import { ContactButton } from '../ContactButton/ContactButton';
import './AboutMeStyles.css';

export const AboutMe = () => (
  <section className="about-me-container container">
    <div className="about-me-img">
      <img src={AlanPhoto} alt="alan-about-photo" />
    </div>
    <div className="about-me-info-container">
      <h2 className="title-section" id="about-me">Sobre mi</h2>
      <p className="about-me-text">
        Soy diseñador gráfico con más de <strong>10 años de experiencia</strong> en
        preparación de archivos para salida de impresión offset.
        <br />
        <br />
        Actualmente estoy enfocado en <strong>crear identidades visuales
        impactantes</strong> que reflejen la esencia de cada marca, además
        de estar inmerso en el <strong>constante aprendizaje del desarrollo web frontend.</strong>
        <br />
        <br />
        Adquiriendo habilidades como <strong>HTML, CSS, JavaScript, TypeScript,
        React, Adobe Premier Pro</strong> y reforzando conocimientos en <strong>Illustrator y
        Photoshop,</strong> trabajo para construir experiencias digitales cautivadoras.
      </p>
      <SocialMediaLinks/>
      <ContactButton className="contact-btn" href='#' download='Alan_Piñón_CV.pdf'>Descargar CV</ContactButton>
    </div>
  </section>
)