import { ProjectCard } from '../ProjectCard/ProjectCard';
import HelseBitesBrand from '../../assets/img/project-img/helsebites-project-cover.png';
import DeepFeelsUI from '../../assets/img/project-img/deep-feels-ui-design-cover.png';
import DeepFeelsBrand from '../../assets/img/project-img/deep-feels-app-cover.png';
import RestCountries from '../../assets/img/project-img/countries-cover.png';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Icon } from '../../assets/icons/Icon';
import './ProjectsStyles.css';

export const Projects = () => (
  <div className="background-section">
    <section id="projects" className="projects-container container">
      <div className="title-container">
        <h2 className="title-section">Proyectos</h2>
        <p className='description'>Algunos de los últimos proyectos que he realizado:</p>
      </div>

      <div className="project-cards-container">

        <ProjectCard
          img={HelseBitesBrand}
          altImg='HelseBites Logo'
          title='HelseBites Visual Identity'
          description='Creación de la identidad visual de la marca
          HelseBites, la cual elabora snacks saludables con una misión clara:
          ofrecer alimentos naturales que promuevan un estilo de vida equilibrado.'
          tags={['Photoshop', 'Illustrator']}
        >
          <ButtonLink href='https://www.behance.net/gallery/209782003/HelseBites-Healthy-Snacks-Visual-Identity'>
            <Icon name='LinkIcon'/>
            Proyecto</ButtonLink>
        </ProjectCard>

        <ProjectCard
          img={DeepFeelsUI}
          altImg='Deep Feels UI'
          title='Deep Feels System Design'
          description='Sistema de diseño que proporciona un conjunto coherente de
          componentes reutilizables, estilos y pautas de diseño para
          facilitar el desarrollo de la aplicación Deep Feels.'
          tags={['React', 'TypeScript', 'Styled Components', 'Webpack', 'Storybook', 'Jest', 'Figma']}
        >
          <ButtonLink href='https://github.com/AlanPinhon/deep-feels-ui'>
            <Icon name='GithubIcon'/>
            Código</ButtonLink>
          <ButtonLink href='https://www.figma.com/design/chUmyBEs9Ig57VKok41QYo/Deep-Feels-UI?m=auto&t=3MAPI6YxWk5tg8cT-6'>
            <Icon name='LinkIcon'/>
            Proyecto</ButtonLink>
        </ProjectCard>

        <ProjectCard
          img={DeepFeelsBrand}
          altImg='Deep Feels Brand'
          title='Deep Feels Brand & Visual Identity'
          description='Desarrollo de la identidad visual de la
          marca Deep Feels; aplicación que ayuda a las personas a relajarse
          y mejorar su estado de ánimo, ofreciendo una gran variedad de sonidos
          relajantes.'
          tags={['Photoshop', 'Illustrator']}
        >
          <ButtonLink href='https://www.behance.net/gallery/201145373/Deep-Feels-Relaxing-App-Brand-Visual-Identity'>
            <Icon name='LinkIcon'/>
            Proyecto</ButtonLink>
        </ProjectCard>

        <ProjectCard
          img={RestCountries}
          altImg='Rest Countries'
          title='Rest Countries API'
          description='Proyecto para buscar información de los países del mundo,
          integrada con la API de REST Countries, Cambia el tema de claro a oscuro de
          forma manual y tomando la configuración del dispositivo del usuario.'
          tags={['React', 'Vite', 'TypeScript', 'Vitest', 'React Router', 'Mock Service Worker']}
        >
          <ButtonLink href='https://github.com/AlanPinhon/rest-countries-api-ts'>
            <Icon name='GithubIcon'/>
            Código</ButtonLink>
          <ButtonLink href='https://countries-app-fm-practice.netlify.app/home'>
            <Icon name='LinkIcon'/>
            Proyecto</ButtonLink>
        </ProjectCard>

      </div>
    </section>
  </div>
)