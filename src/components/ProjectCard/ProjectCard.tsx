import { IconName } from '../../assets/icons/Icon';
import { Tag } from '../Tag/Tag';
import './ProjectCardStyles.css';

type ProjectCardProps = {
  altImg: string;
  description: string;
  img: string;
  title: string;
  tags: {
    color: string,
    tagName: string,
    icon: IconName
  }[];
  children: React.ReactNode;
}

export const ProjectCard = ({altImg, description, img, children, title, tags}:ProjectCardProps) => (
  <section className="project-card">
    <img className='project-img' src={img} alt={altImg} />
    <div className="project-content">
      <h4 className="project-title">{title}</h4>
      <div className="tag-container">
      {
        (tags && tags.length > 0) && tags.map( ({color, tagName, icon}) => (
          <Tag icon={icon} key={tagName} color={color} tagName={tagName}/>
        ))
      }
      </div>
      <p className="project-description">{description}</p>
      <div className="links-container">
        {children}
      </div>
    </div>
  </section>
)