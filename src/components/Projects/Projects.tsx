import { DevProjectCard } from '../ProjectCard/ProjectCard';
import DeepFeelsUI from '../../assets/img/project-img/df-ui-code-cover.jpg';
import './ProjectsStyles.css'

export const Projects = () => (
  <section className="projects-container container">
    <h2 className="title-section" id="projects">Proyectos</h2>


    <div className="project-cards-container">
      <DevProjectCard
        img={DeepFeelsUI}
        altImg='Deep Feels UI Code'
        title='Deep Feels UI'
        description='Sistema de diseño desarrollado en React & TypeScript
        que proporciona un conjunto coherente de componentes reutilizables,
        estilos y pautas de diseño para facilitar el desarrollo de la aplicación
        Deep Feels.'
      />

    </div>
  </section>
)