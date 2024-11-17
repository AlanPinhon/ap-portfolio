import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks';
import { CtaButton } from '../CtaButton/CtaButton';
import { PhilosophyCard } from '../PhilosophyCard/PhilosophyCard';
import AlanPhoto from '../../assets/img/ap-photos/foto_ap_perfil.webp';
import CV from '../../assets/cv/alan-pinon-cv-2024.pdf';
import MissionImg from '../../assets/img/project-img/target-img.png';
import VisionImg from '../../assets/img/project-img/vision-img.png';
import TargetImg from '../../assets/img/project-img/focus-img.png';
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
              Soy Alan Piñón, <strong className="bold">diseñador gráfico y
              desarrollador web frontend</strong> en transición, enfocado en
              la creación de identidades visuales minimalistas que destacan lo
              esencial de cada marca.
            </p>
            <br />
            <p className="about-me-text">
              Creo en el poder de la <strong className="bold">simplicidad </strong> 
              para comunicar de manera clara y efectiva, ayudando a negocios emergentes
              a establecer una presencia visual sólida.
            </p>
          </div>
          <CtaButton className="contact-btn primary" href={CV} download='Alan Piñón CV.pdf'>Descargar CV</CtaButton>
        </div>
      </div>
  
      <div className="philosophy">
        <PhilosophyCard
          src={MissionImg}
          subtitle='Misión'
          description='Ayudar a marcas nuevas a comunicar sus ideas con diseños
          limpios y funcionales, manteniendo un enfoque en la simplicidad.'
        />
        <PhilosophyCard
          src={VisionImg}
          subtitle='Visión'
          description='Ser una referencia en el diseño minimalista, contribuyendo
          a que más marcas puedan conectar visualmente con sus audiencias de forma auténtica.'
        />
        <PhilosophyCard
          src={TargetImg}
          subtitle='Objetivo'
          description='Brindar soluciones visuales adaptadas a las necesidades de cada proyecto,
          integrando un diseño atractivo y funcional que impacte positivamente.'
        />
      </div>
    </section>
  </div>
)