import './SkillIconStyles.css'

type SkillIconProps = {
  src: string,
  alt: string,
  iconName: string
}

export const SkillIcon = ({src,alt,iconName}:SkillIconProps) => (
  <div className="icon-container">
    <div className="img-container">
      <img className="icon-img" src={src} alt={alt} />
    </div>
    <p className="center-text icon-name">{iconName}</p>
  </div>
)