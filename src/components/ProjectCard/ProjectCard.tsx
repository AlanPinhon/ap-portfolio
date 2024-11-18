import { Tag } from '../Tag/Tag';
import './ProjectCardStyles.css';

type ProjectCardProps = {
  altImg: string;
  description: string;
  img: string;
  title: string;
  tags: string[];
  children: React.ReactNode;
}

export const ProjectCard = ({altImg, description, img, children, title, tags}:ProjectCardProps) => (
  <section className="project-card">
    <div className="project-img-container">
      <img className='project-img' src={img} alt={altImg} />
    </div>
    <div className="project-content">
      <div className="project-info">
        <h4 className="project-title">{title}</h4>
        <p className="project-description">{description}</p>
        <div className="tag-container">
        {
          (tags && tags.length > 0) && tags.map( (tagName) => (
            <Tag key={tagName} tagName={tagName}/>
          ))
        }
        </div>
      </div>
      <div className="links-container">
        {children}
      </div>
    </div>
  </section>
)