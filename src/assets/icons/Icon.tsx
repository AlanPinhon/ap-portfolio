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

type IconProps = {
  name: IconName;
}

export const Icon = ({name}:IconProps) => {
  const Component = Icons[name]

  return (
    <Component/>
  )
}