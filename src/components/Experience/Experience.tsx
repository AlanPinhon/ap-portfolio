import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import { Icon } from '../../assets/icons/Icon';
import './ExperienceStyles.css';

export const Experience = () => (
  <section id="experience" className="experience-container container">
    <h2 className="title-section">Experiencia</h2>
    
    <div className="experience-cards-container">
      <ExperienceCard icon={<Icon name='EducationIcon'/>} subtitle='Académica'>
        <div className="experience-info">

          <div className="academy-container">
            <h4 className="experience-title">React: De cero a experto ( Hooks y MERN )</h4>
            <div className="container-source">
              <p className="experience-paragraph">Fernando Herrera - Udemy</p>
              <a href="https://www.udemy.com/course/react-cero-experto/" target='_blank'>Ir al curso</a>
            </div>
          </div>

          <div className="academy-container">
            <h4 className="experience-title">TypeScript: Completa guía y manual de mano</h4>
            <div className="container-source">
              <p className="experience-paragraph">Fernando Herrera - Udemy</p>
              <a href="https://www.udemy.com/course/typescript-guia-completa/" target='_blank'>Ir al curso</a>
            </div>
          </div>

          <div className="academy-container">
            <h4 className="experience-title">JavaScript Moderno Guía Definitiva</h4>
            <div className="container-source">
              <p className="experience-paragraph">Juan Pablo de la Torre Valdez - Udemy</p>
              <a href="https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/" target='_blank'>Ir al curso</a>
            </div>
          </div>

          <div className="academy-container">
            <h4 className="experience-title">Diseño Web Desde Cero a Avanzado</h4>
            <div className="container-source">
              <p className="experience-paragraph">Jose Javier Villena - Udemy</p>
              <a href="https://www.udemy.com/course/diseno-web-desde-cero/" target='_blank'>Ir al curso</a>
            </div>
          </div>

          <div className="academy-container">
            <h4 className="experience-title">CETIS 165 - Bachillerato Tecnológico</h4>
            <div className="container-source">
              <p className="experience-paragraph">Técnico en Diseño y Proyecto Gráfico</p>
              <p className="experience-paragraph academy-year">2007-2011</p>
            </div>
          </div>

        </div>
      </ExperienceCard>

      <ExperienceCard icon={<Icon name='WorkIcon'/>} subtitle='Laboral'>
        <div className="experience-info">

          <div className="work-container">
            <div className="container-source">
              <h4 className="experience-title">CTP & Offset Trejo</h4>
              <h4 className="work-year">08/2018 - 09/2020</h4>
            </div>
            <p className="experience-paragraph">Operador de Preprensa</p>
          </div>
          
          <div className="work-container">
            <div className="container-source">
              <h4 className="experience-title">B&B Acabados</h4>
              <h4 className="work-year">05/2017 - 05/2018</h4>
            </div>
            <p className="experience-paragraph">Operador de Preprensa</p>
          </div>

          <div className="work-container">
            <div className="container-source">
              <h4 className="experience-title">AFK Calidad y Servicio</h4>
              <h4 className="work-year">08/2015 - 05/2017</h4>
            </div>
            <p className="experience-paragraph">Operador de Preprensa</p>
          </div>

          <div className="work-container">
            <div className="container-source">
              <h4 className="experience-title">Expresión Activa</h4>
              <h4 className="work-year">05/2015 - 08/2015</h4>
            </div>
            <p className="experience-paragraph">Ayudante General</p>
          </div>

          <div className="work-container">
            <div className="container-source">
              <h4 className="experience-title">IMDI Impresión y Diseño</h4>
              <h4 className="work-year">11/2013 - 04/2015</h4>
            </div>
            <p className="experience-paragraph">Operador de Preprensa</p>
          </div>

        </div>
      </ExperienceCard>

    </div>
  </section>
)