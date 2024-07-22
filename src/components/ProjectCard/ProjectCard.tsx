import { Tag } from '../Tag/Tag';
import './ProjectCardStyles.css';

type ProjectCardProps = {
  altImg: string;
  description: string;
  img: string;
  title: string;
  tags: {
    color: string,
    tagName: string
  }[];
  children: React.ReactNode;
}

export const DevProjectCard = ({altImg, description, img, children, title, tags}:ProjectCardProps) => (
  <section className="project-card">
    <div className="img-container">
      <img src={img} alt={altImg} />
    </div>
    <div className="separator"></div>
    <div className="project-content">
      <h4 className="project-title">{title}</h4>
      <div className="tag-container">
      {
        (tags && tags.length > 0) && tags.map( ({color, tagName}) => (
          <Tag key={tagName} color={color} tagName={tagName}/>
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