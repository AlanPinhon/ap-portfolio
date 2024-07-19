import './ProjectCardStyles.css';

type ProjectCardProps = {
  altImg: string;
  description: string;
  img: string;
  title: string;
}

export const DevProjectCard = ({altImg, description, img, title}:ProjectCardProps) => (
  <section className="project-card">
    <div className="img-container">
      <img src={img} alt={altImg} />
    </div>
    <div className="separator"></div>
    <div className="project-content">
      <h4 className="project-title">{title}</h4>
      <p className="project-description">{description}</p>
    </div>
  </section>
)