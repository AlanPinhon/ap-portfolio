import LinkIcon from '../../assets/img/link-icon.svg';
import './ExperienceInfoStyles.css';

type ExpInfoProps = {
  courseTitle: string;
  courseInstructor: string;
  courseLink: string;
}

export const ExperienceInfo = ({courseTitle, courseInstructor, courseLink}:ExpInfoProps) => (
  <div className="course-container">
    <h3 className="course-title">{courseTitle}</h3>
    <p className="course-instructor">{courseInstructor}</p>
    <div className="link-container">
      <img className="link-icon" src={LinkIcon} alt="link_icon" />
      <a href={courseLink} target="_blank" >Enlace al curso</a>
    </div>
  </div>
)