import React from 'react';
import './ContactButtonStyles.css';

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  download?: string;
  href?: string;
}

export const ContactButton = ({children, className, href, download}:ButtonProps) => (
  <a
    className={className}
    href={href}
    download={download}
  >
      {children}
  </a>
)