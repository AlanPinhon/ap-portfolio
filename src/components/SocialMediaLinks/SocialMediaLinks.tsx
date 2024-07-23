import { Icon } from '../../assets/icons/Icon';
import './SocialMediaStyles.css';

export const SocialMediaLinks = () => (
  <nav className="social-media-container">
    <a href="https://www.linkedin.com/in/alan-pinon/" className="social-media-link" target='_blank'>
      <Icon name='LinkedinIcon'/>
    </a>
    <a href="https://www.behance.net/AlanPinhon" className="social-media-link" target='_blank'>
      <Icon name='BehanceIcon'/>
    </a>
    <a href="https://github.com/AlanPinhon" className="social-media-link" target='_blank'>
      <Icon name='GithubIcon'/>
    </a>
  </nav>
)