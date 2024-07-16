import { ContactButton } from "../ContactButton/ContactButton"
import AlanPhoto from '../../assets/img/ap-photos/foto_hero.webp';
import './HeaderStyles.css';

export const Header = () => {
  return (
    <section className="header-container container">
      <div className="header-text-container">
        <div className="text-container">
          <h3 className="welcome-text">Hola, mi nombre es</h3>
          <h1 className="name-text">Alan Pinhon</h1>
          <p className="description">
            <strong>Diseñador gráfico &</strong> Desarrollador Web Front-End Jr
          </p>
        </div>
      <ContactButton/>
      </div>
      <div className="welcome-photo-container">
        <img src={AlanPhoto} alt="alan-pinhon-photo" />
      </div>
    </section>
  )
}