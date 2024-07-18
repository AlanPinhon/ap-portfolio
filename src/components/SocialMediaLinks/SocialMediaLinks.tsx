import { LinkedinIcon, BehanceIcon, GithubIcon } from '../../assets/icons';
import './SocialMediaStyles.css';

export const SocialMediaLinks = () => (
  <nav className="social-media-container">
    <a href="https://www.linkedin.com/in/alan-pinon/" className="social-media-link" target='_blank'>
      <LinkedinIcon/>
    </a>
    <a href="https://www.behance.net/AlanPinhon" className="social-media-link" target='_blank'>
      <BehanceIcon/>
    </a>
    <a href="https://github.com/AlanPinhon" className="social-media-link" target='_blank'>
      <GithubIcon/>
    </a>
  </nav>
)