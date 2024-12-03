import {BehanceIcon, CloseIcon, DarkIcon, EducationIcon, GithubIcon, HamburgerIcon, LightIcon, LinkIcon, LinkedinIcon, MonitorIcon, WorkIcon} from '../icons';

const Icons = {
  BehanceIcon,
  CloseIcon,
  DarkIcon,
  EducationIcon,
  GithubIcon,
  HamburgerIcon,
  LightIcon,
  LinkIcon,
  LinkedinIcon,
  MonitorIcon,
  WorkIcon
}

export type IconName =
'BehanceIcon' |
'CloseIcon' |
'DarkIcon' |
'EducationIcon' |
'GithubIcon' |
'HamburgerIcon' |
'LightIcon' |
'LinkIcon' |
'LinkedinIcon' |
'MonitorIcon' |
'WorkIcon';

export type IconProps = {
  name: IconName;
  className?: string;
}

export const Icon = ({name, className}:IconProps) => {
  const Component = Icons[name]

  return (
    <Component name={name} className={className}/>
  )
}