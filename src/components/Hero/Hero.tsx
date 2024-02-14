import { ContactButton } from "../ContactButton/ContactButton"
import AlanPhoto from '../../assets/img/ap-photos/foto_hero.jpg';
import './HeroStyles.css';

export const Hero = () => {
  return (
    <section className="welcome-container container">
      <div className="welcome-container-presentation">
        <h3 className="welcome-text">Hola, mi nombre es</h3>
        <h1 className="name-text">Alan Piñón</h1>
        <p className="description">
            Soy un <strong className="profession">diseñador gráfico</strong> en camino
            a convertirme en <strong className="profession">desarrollador web front-end.</strong>
            <br />
            <br />
            <strong>¡Bienvenidos a mi viaje!</strong>
        </p>
        <ContactButton/>
      </div>
      <div className="welcome-photo-container">
        <img src={AlanPhoto} alt="alan-pinhon-photo" />
      </div>
    </section>
  )
}