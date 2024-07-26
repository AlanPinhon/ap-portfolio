import { SocialMediaLinks } from "../SocialMediaLinks/SocialMediaLinks";
import './FooterStyles.css';

export const Footer = () => (
  <footer className="footer-container container">
    <div className="separator">
      <p className="copyright-notice">© 2024  Alan Pinhon - Todos los derechos reservados</p>
      <SocialMediaLinks/>
    </div>
  </footer>
)