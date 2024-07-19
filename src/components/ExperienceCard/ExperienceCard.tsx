import React from "react";
import './ExperienceCardStyles.css';

type CardProps = {
  children: React.ReactNode;
  icon:React.ReactNode;
  subtitle: string;
}

export const ExperienceCard = ({children, subtitle, icon}: CardProps) => {
  return (
    <section className="experience-card">
      <div className="experience-title">
        <div className="background-icon">
          {icon}
        </div>
        <h3 className="subtitle-section">{subtitle}</h3>
      </div>
      {children}
    </section>
  )
}