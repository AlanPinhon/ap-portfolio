import LinkIcon from '../../assets/img/link-icon.svg';
import GithubLogo from '../../assets/img/social-icons/logo-github.svg'
import './DevProjectCardStyles.css';

type ProjectCardProps = {
  srcImg: string;
  altImg: string;
  title: string;
  description: string;
  previewLink: string;
  codeLink: string;
  tagsArray: string[];
}

export const DevProjectCard = ({srcImg,altImg,title,description,previewLink,codeLink,tagsArray}:ProjectCardProps) => (
  <div className="project-card">
      <div className="project-img-container">
        <a href={previewLink} target="_blank">
          <img src={srcImg} alt={altImg} className="project-img"/>  
        </a>
      </div>

      <div className="project-info-container">
        <div className="project-info">
          <h4 className="project-title">{title}</h4>
          <p className="project-description">{description}</p>
        </div>
        <div className="tags-container">
          {
            (tagsArray && tagsArray.length > 0) && tagsArray.map ( tag => (
              <p className="tag-name" key={tag}>{tag}</p>
            ))
          }
        </div>
        <div className="links-container">
          <div className="link-container">
            <img className="link-icon" src={LinkIcon} alt="link_icon" />
            <a href={previewLink} target="_blank">Vista Previa</a>
          </div>
          <div className="link-container">
            <img className="link-icon" src={GithubLogo} alt="github_logo" />
            <a href={codeLink} target="_blank">Código Fuente</a>
          </div>
        </div>
      </div>
    </div>
)