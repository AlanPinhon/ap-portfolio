import { CtaButton } from '../CtaButton/CtaButton';
import WorksImg from '../../assets/img/project-img/pojects-img.jpg';
import './ContactStyles.css';

export const Contact = () => {

  return (
    <section id="contact" className="contact-container container">
      <div className="contact-info">
      <img className="projects-img" src={WorksImg} alt="Proyectos de Alan" />
        <div className="contact-text-container">
          <h3 className="contact-me">Construyamos algo increíble juntos.</h3>
          <p className="contact-me-info">
            Estoy disponible para responder tus
            preguntas y explorar oportunidades de
            colaboración.
          </p>
          <CtaButton className="contact-btn white" href="mailto:alanpinon32@gmail.com">Contáctame</CtaButton>
        </div> 
      </div>

    </section>
  )
}