import { SocialMediaLinks } from "../SocialMediaLinks/SocialMediaLinks";
import './FooterStyles.css';

export const Footer = () => (
  <footer className="footer-container container">
    <p className="copyright-notice">© 2024  Alan Pinhon - Todos los derechos reservados</p>
    <SocialMediaLinks/>
  </footer>
)