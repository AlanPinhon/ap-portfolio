import React from 'react';
import './ButtonLinkStyles.css';

type BtnLinkProps = {
  href: string;
  children: React.ReactNode;
}

export const ButtonLink = ({href, children}:BtnLinkProps) => (
  <a className='btn-link' href={href} target='_blank'>
      
    {children}
  </a>
)