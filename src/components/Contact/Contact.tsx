import { ContactButton } from '../CtaButton/CtaButton';
import ContactPhoto from '../../assets/img/ap-photos/foto_ap_perfil.webp'
import './ContactStyles.css';

export const Contact = () => {

  return (
    <section id="contact" className="contact-container container">
      <div className="contact-info">

        <img className='contact-img' src={ContactPhoto} alt="Alan Piñón Profile" />

        <div className="contact-text-container">
          <h3 className="contact-me">¡Colaboremos juntos!</h3>
          <p className="contact-me-info">
            Estoy disponible para discutir oportunidades
            <br />
            profesionales y responder a cualquier pregunta.
          </p>
        </div> 

        <ContactButton className="contact-btn" href="mailto:alanpinon32@gmail.com">Contáctame</ContactButton>
        
      </div>

    </section>
  )
}