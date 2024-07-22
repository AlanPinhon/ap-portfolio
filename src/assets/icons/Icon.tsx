import {BehanceIcon, CloseIcon, DarkIcon, EducationIcon, GithubIcon, HamburgerIcon, LightIcon, LinkIcon, LinkedinIcon, WorkIcon} from '../icons';

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
'WorkIcon';

type IconProps = {
  name: IconName;
}


export const Icon = ({name}:IconProps) => {
  const Component = Icons[name]

  return (
    <Component/>
  )
}