import {ArrowUpIcon, BehanceIcon, CloseIcon, DarkIcon, EducationIcon, FigmaIcon, GithubIcon, HamburgerIcon, IllustratorIcon, JestIcon, LightIcon, LinkIcon, LinkedinIcon, MSWIcon, PhotoshopIcon, ReactIcon, ReactRouterIcon, StorybookIcon, StyledComponentsIcon, TypeScriptIcon, ViteIcon, VitestIcon, WebpackIcon, WorkIcon} from '../icons';

const Icons = {
  ArrowUpIcon,
  BehanceIcon,
  CloseIcon,
  DarkIcon,
  EducationIcon,
  FigmaIcon,
  GithubIcon,
  HamburgerIcon,
  IllustratorIcon,
  JestIcon,
  LightIcon,
  LinkIcon,
  LinkedinIcon,
  MSWIcon,
  PhotoshopIcon,
  ReactIcon,
  ReactRouterIcon,
  StorybookIcon,
  StyledComponentsIcon,
  TypeScriptIcon,
  ViteIcon,
  VitestIcon,
  WebpackIcon,
  WorkIcon
}

export type IconName =
'ArrowUpIcon' |
'BehanceIcon' |
'CloseIcon' |
'DarkIcon' |
'EducationIcon' |
'FigmaIcon' |
'GithubIcon' |
'HamburgerIcon' |
'IllustratorIcon' |
'JestIcon' |
'LightIcon' |
'LinkIcon' |
'LinkedinIcon' |
'MSWIcon' |
'PhotoshopIcon' |
'ReactIcon' |
'ReactRouterIcon' |
'StorybookIcon' |
'StyledComponentsIcon' |
'TypeScriptIcon' |
'ViteIcon' |
'VitestIcon' |
'WebpackIcon' |
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