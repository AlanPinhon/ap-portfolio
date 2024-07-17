import { ContactButton } from "../ContactButton/ContactButton"
import AlanPhoto from '../../assets/img/ap-photos/foto_hero.webp';
import './HeaderStyles.css';

export const Header = () => {
  return (
    <header className="header-container container">
      <div className="header-text-container">
        <div className="text-container">
          <h3 className="welcome-text">¡Hola! Mi nombre es</h3>
          <h1 className="name-text">Alan <span className="last-name">Pinhon</span></h1>
          <p className="description">
            <strong>Diseñador gráfico &</strong> Desarrollador Web Front-End Jr
          </p>
        </div>
      <ContactButton className="contact-btn" href="mailto:alanpinon32@gmail.com">Contáctame</ContactButton>
      </div>
      <div className="welcome-photo-container">
        <img src={AlanPhoto} alt="Foto de Alan Piñón" />
      </div>
    </header>
  )
}