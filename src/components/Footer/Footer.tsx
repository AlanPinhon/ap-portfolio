import { SocialMediaLinks } from "../SocialMediaLinks/SocialMediaLinks";
import './FooterStyles.css';

export const Footer = () => (
  <div className="footer-background">
    <footer className="footer-container container">
      <p>© 2024  Alan Pinhon - Todos los derechos reservados</p>
      <SocialMediaLinks/>
    </footer>
  </div>
)