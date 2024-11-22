import './PhilosophyCardStyles.css';

type PhilosophyCardProps = {
  src: string;
  subtitle:string;
  description:string;
}

export const PhilosophyCard = ({src,subtitle,description}:PhilosophyCardProps) => {
  return (
    <div className="philosophy-card">
      <div className="philosophy-card-header">
        <img className='philosophy-icon' src={src} alt="misión" />
        <h3 className="subtitle-section">{subtitle}</h3>
      </div>
      <p className="philosophy-text">{description}</p>
    </div>
  )
}