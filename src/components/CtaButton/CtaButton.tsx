import React from 'react';
import './CtaButtonStyles.css';

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  download?: string;
  href?: string;
}

export const CtaButton = ({children, className, href, download}:ButtonProps) => (
  <a
    className={className}
    href={href}
    download={download}
  >
      {children}
  </a>
)