import React from 'react';
import { BorderBeam } from '../ui/border-beam';
import TimeLineExperienceSection from './time-line-experience-section';

type Experience = {
  duration: string;
  position: string;
  company: string;
  mode: string;
  companyLink?: string;
  skills: {
    name: string;
  }[];
};

function ExperienceSection() {
  return (
    <div className="md:h-40">
      <TimeLineExperienceSection />
    </div>
  );
}

export default ExperienceSection;
