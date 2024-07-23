import { Icon, IconName } from '../../assets/icons/Icon';
import './TagStyles.css';

export type TagProps = {
  color: string;
  tagName: string;
  icon: IconName
}

export const Tag = ({color, tagName, icon}:TagProps) => (
  <div className="tag" style={{backgroundColor: `${color}`}}>
    <Icon name={icon}/>
    <p className="tag-name">{tagName}</p>
  </div>
)