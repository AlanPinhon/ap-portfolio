import './TagStyles.css';

export type TagProps = {
  tagName: string;
}

export const Tag = ({ tagName }:TagProps) => (
  <div className="tag">
    <p className="tag-name">{tagName}</p>
  </div>
)