import { DevProjectCard } from '../ProjectCard/ProjectCard';
import DeepFeelsUI from '../../assets/img/project-img/deep-feels-ui-cover.jpg';
import DeepFeelsBrand from '../../assets/img/project-img/df-brand-cover.jpg';
import RestCountries from '../../assets/img/project-img/countries-cover.jpg';
import APBrand from '../../assets/img/project-img/ap-brand-cover.jpg';
import ShortlyCover from '../../assets/img/project-img/shortly-cover.jpg';
import AdviceCover from '../../assets/img/project-img/advice-cover.jpg';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Icon } from '../../assets/icons/Icon';
import { tagList } from './tagList';
import './ProjectsStyles.css';

export const Projects = () => (
  <section className="projects-container container">
    <h2 className="title-section" id="projects">Proyectos</h2>

    <div className="project-cards-container">

      <DevProjectCard
        img={DeepFeelsUI}
        altImg='Deep Feels UI'
        title='Deep Feels System Design'
        description='Sistema de diseño desarrollado en Figma,
        React & TypeScript que proporciona un conjunto coherente de
        componentes reutilizables, estilos y pautas de diseño para
        facilitar el desarrollo de la aplicación Deep Feels.'
        tags={[tagList.react, tagList.ts, tagList.styled, tagList.webpack, tagList.storybook, tagList.jest, tagList.figma]}
      >
        <ButtonLink href='https://github.com/AlanPinhon/deep-feels-ui'>
          <Icon name='GithubIcon'/>
          Código</ButtonLink>
        <ButtonLink href='https://www.figma.com/design/chUmyBEs9Ig57VKok41QYo/Deep-Feels-UI?m=auto&t=3MAPI6YxWk5tg8cT-6'>
          <Icon name='LinkIcon'/>
          Proyecto</ButtonLink>
      </DevProjectCard>

      <DevProjectCard
        img={DeepFeelsBrand}
        altImg='Deep Feels Brand'
        title='Deep Feels Brand & Visual Identity'
        description='Proyecto del desarrollo de la identidad visual de la
        marca Deep Feels; aplicación que ayuda a las personas a relajarse
        y mejorar su estado de ánimo, ofreciendo una gran variedad de sonidos
        relajantes.'
        tags={[tagList.ai, tagList.ps]}
      >
        <ButtonLink href='https://www.behance.net/gallery/201145373/Deep-Feels-Relaxing-App-Brand-Visual-Identity'>
          <Icon name='LinkIcon'/>
          Proyecto</ButtonLink>
      </DevProjectCard>

      <DevProjectCard
        img={RestCountries}
        altImg='Rest Countries'
        title='Rest Countries API'
        description='Proyecto para buscar información de los países del mundo,
        integrada con la API de REST Countries, Cambia el tema de claro a oscuro de
        forma manual y tomando la configuración del dispositivo del usuario.'
        tags={[tagList.react, tagList.vite, tagList.ts, tagList.vitest, tagList.reactRouter, tagList.msw]}
      >
        <ButtonLink href='https://github.com/AlanPinhon/rest-countries-api-ts'>
          <Icon name='GithubIcon'/>
          Código</ButtonLink>
        <ButtonLink href='https://countries-app-fm-practice.netlify.app/home'>
          <Icon name='LinkIcon'/>
          Proyecto</ButtonLink>
      </DevProjectCard>

      <DevProjectCard
        img={APBrand}
        altImg='Alan Piñón Visual Identity'
        title='Alan Pinhon Personal Identity'
        description='Proyecto de la identidad visual de mi marca personal Alan Pinhon.'
        tags={[tagList.ai, tagList.ps]}
      >
        <ButtonLink href='https://www.behance.net/gallery/170906851/Alan-Pinhon-Personal-Identity'>
          <Icon name='LinkIcon'/>
          Proyecto</ButtonLink>
      </DevProjectCard>

      <DevProjectCard
        img={ShortlyCover}
        altImg='Shortly WebSite'
        title='Shortly Landing Page'
        description='Proyecto para crear URL acortadas. Está integrado con la API Bitly.
        Los enlaces persisten al recargar la página y se copian en el clipboard con un solo clic.'
        tags={[tagList.react, tagList.vite, tagList.ts, tagList.vitest, tagList.msw]}
      >
        <ButtonLink href='https://github.com/AlanPinhon/url-shortening-page-ts'>
          <Icon name='GithubIcon'/>
          Código</ButtonLink>
        <ButtonLink href='https://shortly-landing-page-app-fm.netlify.app'>
          <Icon name='LinkIcon'/>
          Proyecto</ButtonLink>
      </DevProjectCard>

      <DevProjectCard
        img={AdviceCover}
        altImg='Advice Generator WebSite'
        title='Advice Generator'
        description='Proyecto para generar consejos de forma aleatoria utilizando
        Advice Slip API y genera un nuevo consejo al dar clic en el ícono
        Muestra un mensaje de error si falla la conexión.'
        tags={[tagList.react, tagList.vite, tagList.ts, tagList.vitest, tagList.msw]}
      >
        <ButtonLink href='https://github.com/AlanPinhon/advice-generator-app-ts'>
          <Icon name='GithubIcon'/>
          Código</ButtonLink>
        <ButtonLink href='https://advice-generator-app-practice-fm.netlify.app'>
          <Icon name='LinkIcon'/>
          Proyecto</ButtonLink>
      </DevProjectCard>

    </div>
  </section>
)