import X_logo from '../../assets/img/social-icons/logo-x.svg';
import Behance_logo from '../../assets/img/social-icons/logo-behance.svg';
import Github_logo from '../../assets/img/social-icons/logo-github.svg';
import Instagram_logo from '../../assets/img/social-icons/logo-ig.svg';
import Linkedin_logo from '../../assets/img/social-icons/logo-linkedin.svg';
import Twitch_logo from '../../assets/img/social-icons/logo-twitch.svg';
import './SocialMediaStyles.css';

export const SocialMediaLinks = () => (
  <div className="social-media-container">
    <li>
      <a href="https://www.linkedin.com/in/alan-pinon/" className="social-media-link" target='_blank'>
        <img src={Linkedin_logo} alt="Linkedin_logo" />
      </a>
    </li>
    <li>
      <a href="https://www.behance.net/AlanPinhon" className="social-media-link" target='_blank'>
        <img src={Behance_logo} alt="Behance_logo" />
      </a>
    </li>
    <li>
      <a href="https://github.com/AlanPinhon" className="social-media-link" target='_blank'>
        <img src={Github_logo} alt="Github_logo" />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/AlanPinhon" className="social-media-link" target='_blank'>
        <img src={X_logo} alt="X_logo" />
      </a>
    </li>
    <li>
      <a href="https://www.twitch.tv/alan_pinhon" className="social-media-link" target='_blank'>
        <img src={Twitch_logo} alt="Twitch_logo" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/alanpinhon" className="social-media-link" target='_blank'>
        <img src={Instagram_logo} alt="Instagram_logo" />
      </a>
    </li>
  </div>
)