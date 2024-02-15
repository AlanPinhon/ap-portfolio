import AlanPhoto from '../../assets/img/ap-photos/foto_ap_perfil.webp';
import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks';
import './AboutMeStyles.css';

export const AboutMe = () => (
  <section className="about-me-container container">
    <div className="about-me-img-container">
      <div className="about-me-img">
        <img src={AlanPhoto} alt="alan-about-photo" />
      </div>
      <div className="about-me-text-container">
        <p className="about-me-name">Alan Piñón Nabor</p>
        <SocialMediaLinks/>
      </div>
    </div>
    <div className="about-me-info-container">
      <h2 className="title-section" id="about-me">Sobre mi</h2>
      <h3 className="subtitle-section">
        Fusionando creatividad y código para construir
        experiencias digitales sorprendentes.
      </h3>
      <p className="about-me-text">
        Teniendo más de 10 años experiencia en diseño publicitario y teoría del color
        me gustaría combinarlos con mi emoción actual por explorar el desarrollo web.
        HTML, CSS, JavaScript, TypeScript y React son parte de mi viaje hacia el frontend.
        <br />
        <br />
        Me considero una persona sencilla y responsable, además de comprometerme con el
        aprendizaje constante. Mi actitud colaborativa y energía positiva se
        reflejan en mi trabajo, aportando vitalidad a cualquier equipo.
        <br />
        <br />
        Soy un fanático del café, me gusta escuchar música rock
        en especial hard rock, heavy metal & rock progresivo, además de tocar la guitarra 
        en mis ratos libres y despejarme por un momento a jugar videojuegos.
      </p>
    </div>
  </section>
)