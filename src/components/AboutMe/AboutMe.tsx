import AlanPhoto from '../../assets/img/ap-photos/foto_ap_perfil.webp';
import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks';
import { CtaButton } from '../CtaButton/CtaButton';
import CV from '../../assets/cv/alan-pinon-cv-2024.pdf';
import './AboutMeStyles.css';

export const AboutMe = () => (
  <div className="background-section">
    <section id="about-me" className="about-me-container container">
      
      <div className="about-me-info-container">
        <div className="about-me-img">
          <img src={AlanPhoto} alt="alan-about-photo" />
          <SocialMediaLinks/>
        </div>
        <div className="about-me-text-container">
            <h2 className="title-section">¿Quién soy?</h2>
          <div>
            <p className="about-me-text">
              Soy Alan Piñón, <strong className="bold">diseñador gráfico y desarrollador web frontend</strong> en transición, enfocado en la creación de identidades visuales minimalistas que destacan lo esencial de cada marca.
            </p>
            <br />
            <p className="about-me-text">
              Creo en el poder de la <strong className="bold">simplicidad</strong> para comunicar de manera clara y efectiva, ayudando a negocios emergentes a establecer una presencia visual sólida.
            </p>
          </div>
          <CtaButton className="contact-btn primary" href={CV} download='Alan Piñón CV.pdf'>Descargar CV</CtaButton>
        </div>
      </div>
  
    </section>
  </div>
)