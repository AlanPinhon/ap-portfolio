import { ExperienceInfo } from '../ExperienceInfo/ExperienceInfo';
import { TimeLime } from '../TimeLime/TimeLime';
import './ExperienceStyles.css';

export const Experience = () => (
  <section className="experience-container container">
    <h2 className="title-section" id="projects">Experiencia</h2>
    <h3 className="center-text subtitle-section">
      Mi experiencia adquirida en los últimos años:
    </h3>

    <div className="experience-timeline-container">
      
      <TimeLime/>

      <div className="experience-date">

        <ExperienceInfo
          courseTitle="React: De cero a experto ( Hooks y MERN )"
          courseInstructor="Fernando Herrera - Udemy"
          courseLink="https://www.udemy.com/course/react-cero-experto/"
        />

        <ExperienceInfo
          courseTitle="TypeScript: Tu completa guía y manual de mano"
          courseInstructor="Fernando Herrera - Udemy"
          courseLink="https://www.udemy.com/course/typescript-guia-completa/"
        />

        <ExperienceInfo
          courseTitle="JavaScript Moderno Guía Definitiva"
          courseInstructor="Juan Pablo De la torre Valdez - Udemy"
          courseLink="https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/"
        />

        <ExperienceInfo
          courseTitle="Diseño Web Desde Cero a Avanzado"
          courseInstructor="Jose Javier Villena - Udemy"
          courseLink="https://www.udemy.com/course/diseno-web-desde-cero/"
        />

      </div>
    </div>
  </section>
)