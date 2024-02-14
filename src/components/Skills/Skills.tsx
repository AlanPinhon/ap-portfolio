import { SkillIcon } from '../SkillIcon/SkillIcon'
import Illustrator from '../../assets/img/design-icons/illustrator-cc.svg'
import InDesign from '../../assets/img/design-icons/indesign-cc.svg'
import Photoshop from '../../assets/img/design-icons/photoshop-cc.svg'
import Figma from '../../assets/img/design-icons/logo-figma.svg'
import LogoHTML from '../../assets/img/dev-icons/html-1.svg'
import CSSLogo from '../../assets/img/dev-icons/css-3.svg'
import JavaScriptLogo from '../../assets/img/dev-icons/logo-javascript.svg'
import TypeScriptLogo from '../../assets/img/dev-icons/typescript.svg'
import ReactLogo from '../../assets/img/dev-icons/react-2.svg'
import GitLogo from '../../assets/img/dev-icons/git-icon.svg'
import './SkillsStyles.css';

export const Skills = () => (
  <section className="skills-container container">
    <h2 className="title-section" id="skills">Habilidades</h2>
    <h3 className="center-text subtitle-section">
      Herramientas y habilidades
      <br />
      en las que tengo conocimiento:
    </h3>

    <div className="skills-icons-container container">

      <div className="design-skills-container">
        <h3 className="center-text skills-title">
          Diseño Gráfico
        </h3>
        <div className="icons-container">
          <SkillIcon
            src={Illustrator} 
            alt="illustrator-logo" 
            iconName="Illustrator"
          />
          <SkillIcon
            src={Photoshop} 
            alt="photoshop-logo" 
            iconName="Photoshop"
          />
          <SkillIcon
            src={InDesign} 
            alt="indesign-logo" 
            iconName="InDesign"
          />
          <SkillIcon
            src={Figma} 
            alt="figma-logo" 
            iconName="Figma"
          />
        </div>
      </div>

      <div className="development-skills-container">
        <h3 className="center-text skills-title">
          Desarrollo Web
        </h3>
        <div className="icons-container">
          <SkillIcon
            src={LogoHTML}
            alt="html-icon"
            iconName="HTML"
          />
          <SkillIcon
            src={CSSLogo}
            alt="css-icon"
            iconName="CSS"
          />
          <SkillIcon
            src={JavaScriptLogo}
            alt="js-icon"
            iconName="JavaScript"
          />
          <SkillIcon
            src={TypeScriptLogo}
            alt="ts-icon"
            iconName="TypeScript"
          />
          <SkillIcon
            src={ReactLogo}
            alt="react-icon"
            iconName="React"
          />
          <SkillIcon
            src={GitLogo}
            alt="git-icon"
            iconName="Git"
          />
        </div>
      </div>

    </div>
  </section>
)