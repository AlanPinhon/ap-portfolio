import './TagStyles.css';

type TagProps = {
  color: string;
  tagName: string;
}

export const Tag = ({color, tagName}:TagProps) => (
  <div className="tag" style={{backgroundColor: `${color}`}}>
    <p className="tag-name">{tagName}</p>
  </div>
)