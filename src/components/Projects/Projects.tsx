import { DevProjectCard } from '../DevProjectCard/DevProjectCard';
import CountriesImg from '../../assets/img/project-img/rest-countries-desktop-preview.jpg';
import ShortlyImg from '../../assets/img/project-img/shortly-app-desktop-preview.jpg';
import AdvicesImg from '../../assets/img/project-img/advice-generator-desktop-preview.jpg';
import './ProjectsStyles.css'

export const Projects = () => (
  <section className="projects-container container">
    <h2 className="title-section" id="projects">Proyectos</h2>
    <h3 className="center-text subtitle-section">
      Mis proyectos más recientes:
    </h3>

    <div className="project-cards-container">
      <DevProjectCard
        srcImg={CountriesImg}
        altImg='rest-countries-img'
        title='Rest Countries API'
        description='Proyecto para buscar información de
        los países del mundo, integrada con la API de REST Countries,
        Cambia el tema de claro a oscuro de forma manual y
        tomando la configuración del dispositivo del usuario.'
        previewLink='https://countries-app-fm-practice.netlify.app/'
        codeLink='https://github.com/AlanPinhon/rest-countries-api-ts'
        tagsArray={['React', 'Vite', 'TypeScript', 'Vitest', 'React Router', 'Mock Service Worker']}
      />

      <DevProjectCard
        srcImg={ShortlyImg}
        altImg='shorted-link-img'
        title='Shortly Landing Page'
        description='Proyecto para crear URL acortadas.
        Está integrado con la API Bitly. Los enlaces persisten al recargar la página
        y se copian en el clipboard con un solo clic.'
        previewLink='https://shortly-landing-page-app-fm.netlify.app/'
        codeLink='https://github.com/AlanPinhon/url-shortening-page-ts'
        tagsArray={['React', 'Vite', 'TypeScript', 'Vitest', 'Mock Service Worker']}
      />

      <DevProjectCard
        srcImg={AdvicesImg}
        altImg='advices-img'
        title='Advice Generator'
        description='Proyecto para generar consejos de forma aleatoria
        utilizando Advice Slip API y genera un nuevo consejo al dar
        clic en el ícono.'
        previewLink='https://advice-generator-app-practice-fm.netlify.app/'
        codeLink='https://github.com/AlanPinhon/advice-generator-app-ts'
        tagsArray={['React', 'Vite', 'TypeScript', 'Vitest', 'Mock Service Worker']}
      />
    </div>
  </section>
)