import { IconProps } from './Icon';

export const CloseIcon = ({className}:IconProps) => {
  return (
    <svg className={`menu-icon ${className}`} width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50"  xmlSpace="preserve">
      <path
        className="st0"
        d="M46.2,0L50,3.8L28.8,25L50,46.2L46.2,50L25,28.8L3.8,50L0,46.2L21.2,25L0,3.8L3.8,0L25,21.2L46.2,0z"
      />
    </svg>
  )
}