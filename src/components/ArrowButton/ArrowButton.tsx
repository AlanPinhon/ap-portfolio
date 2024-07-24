import { Icon } from '../../assets/icons/Icon';
import './ArrowButtonStyles.css';

export const ArrowButton = () => {
  return (
    <a href="#home">
      <div className="arrow-btn">
        <Icon name='ArrowUpIcon'/>
      </div>
    </a>
  )
}