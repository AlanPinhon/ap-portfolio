import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import { Icon } from '../../assets/icons/Icon';
import './ExperienceStyles.css';

export const Experience = () => (
  <section id="experience" className="experience-container container">
    <div className="title-container">
      <h2 className="title-section">Experiencia</h2>
      <p className='description'>Un breve resumen de mis experiencias más recientes:</p>
    </div>
    
    <div className="experience-cards-container">
      <ExperienceCard icon={<Icon name='WorkIcon'/>} subtitle='Laboral'>
        <div className="experience-info">

          <div className="work-container">
            <div className="column">
              <h4 className="job-place">CTP & Offset Trejo</h4>
            </div>
            <div className="column exp-info">
              <h4 className="job-title">Operador de Preprensa</h4>
              <p className='job-description'>
                - Formación de archivos para salida a offset
                <br />
                - Mantenimiento de maquinaria CTP
                <br />
                - Atención al cliente
              </p>
            </div>
            <div className="column">
              <p className="work-year">Ago 2018 - Sep 2020</p>
            </div>
          </div>

          <div className="work-container">
            <div className="column">
              <h4 className="job-place">B&B Acabados S.A de C.V</h4>
            </div>
            <div className="column exp-info">
              <h4 className="job-title">Operador de Preprensa</h4>
              <p className='job-description'>
                - Formación de archivos para salida a offset
                <br />
                - Trabajo en equipo
                <br />
                - Mantenimiento de maquinaria CTP
                <br />
                - Atención al cliente
              </p>
            </div>
            <div className="column">
              <p className="work-year">May 2017 - May 2018</p>
            </div>
          </div>   

          <div className="work-container">
            <div className="column">
              <h4 className="job-place">AFK Calidad y Servicio</h4>
            </div>
            <div className="column exp-info">
              <h4 className="job-title">Operador de Preprensa</h4>
              <p className='job-description'>
                - Formación de archivos para salida a offset
                <br />
                - Mantenimiento de maquinaria CTP
                <br />
                - Atención al cliente
              </p>
            </div>
            <div className="column">
              <p className="work-year">Ago 2015 - May 2017</p>
            </div>
          </div> 

          <div className="work-container">
            <div className="column">
              <h4 className="job-place">Expresión Activa</h4>
            </div>
            <div className="column exp-info">
              <h4 className="job-title">Ayudante General</h4>
              <p className='job-description'>
                - Cargamento de material impreso
                <br />
                - Elaboración de placas de magnesio y zinc
              </p>
            </div>
            <div className="column">
              <p className="work-year">May 2015 - Ago 2015</p>
            </div>
          </div>

          <div className="work-container">
            <div className="column">
              <h4 className="job-place">IMDI Impresión y Diseño</h4>
            </div>
            <div className="column exp-info">
              <h4 className="job-title">Operador de Preprensa</h4>
              <p className='job-description'>
                - Formación de archivos para salida a offset
                <br />
                - Retoque de fotografías
                <br />
                - Atención al cliente
              </p>
            </div>
            <div className="column">
              <p className="work-year">Nov 2013 - Abr 2015</p>
            </div>
          </div>  

        </div>
      </ExperienceCard>

      <ExperienceCard icon={<Icon name='EducationIcon'/>} subtitle='Académica'>
        <div className="experience-info">

          <div className="academy-container">
            <div className="column">
              <h4 className="instructor-name">Fernando Herrera</h4>
            </div>
            <div className="column exp-info">
              <h4 className="course-title">React: De cero a experto ( Hooks y MERN )</h4>
              <p className='course-projects'>
                - Heroes App Project
                <br />
                - GIF Expert App Project
              </p>
            </div>
            <div className="column">
              <a className='experience-link' href="https://www.udemy.com/course/typescript-guia-completa/" target='_blank'>Ir al curso</a>
            </div>
          </div>

          <div className="academy-container">
            <div className="column">
              <h4 className="instructor-name">Fernando Herrera</h4>
            </div>
            <div className="column exp-info">
              <h4 className="course-title">TypeScript: Completa guía y manual de mano</h4>
            </div>
            <div className="column">
              <a className='experience-link' href="https://www.udemy.com/course/typescript-guia-completa/" target='_blank'>Ir al curso</a>
            </div>
          </div>

          <div className="academy-container">
            <div className="column">
              <h4 className="instructor-name">Juan Pablo de la Torre Valdez</h4>
            </div>
            <div className="column exp-info">
              <h4 className="course-title">JavaScript Moderno Guía Definitiva</h4>
              <p className='course-projects'>
                - Carrito de compras con Local Storage
                <br />
                - Buscador de imágenes con Pixabay API
                <br />
                - Cotizador de Criptomonedas
              </p>
            </div>
            <div className="column">
              <a className='experience-link' href="https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/" target='_blank'>Ir al curso</a>
            </div>
          </div>

          <div className="academy-container">
            <div className="column">
              <h4 className="instructor-name">CETIS No. 165</h4>
            </div>
            <div className="column exp-info">
              <h4 className="course-title">Técnico en Diseño y Proyecto Gráfico</h4>
            </div>
            <div className="column">
              <p className="work-year">Gen 2007 - 2011</p>
            </div>
          </div>

        </div>

      </ExperienceCard>
    </div>
  </section>
)