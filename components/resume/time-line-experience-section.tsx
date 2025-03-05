import { InteractiveTimeline } from './interactive-timeline';

function TimeLineExperienceSection() {
  interface Experience {
    duration: string;
    position: string;
    company: string;
    companyLink?: string;
    mode: string;
    skills: { name: string }[];
  }

  const Experience: Experience[] = [
    {
      duration: 'Jan 2024 - Aug 2024',
      position: 'Software Engineer Intern',
      company: 'LiveRoom Technologies (Pvt) Ltd. · Full-time',
      mode: 'Onsite',
      companyLink: 'https://www.liveroom.xyz/',
      skills: [
        { name: 'Serverless' },
        { name: 'NodeJs' },
        { name: 'Python' },
        { name: 'MongoDB' },
        { name: 'AWS' },
        { name: 'NextJs' },
        { name: 'TailwindCSS' },
        { name: 'Blockchain' },
        { name: 'OAuth' },
        { name: 'Nextra' },
      ],
    },
    {
      duration: 'Jan 2024 - Present',
      position: 'Freelance Web Developer',
      company: 'Part-time',
      mode: 'Online',
      skills: [
        { name: 'Serverless' },
        { name: 'NodeJs' },
        { name: 'NextJs' },
        { name: 'MongoDB' },
        { name: 'AWS' },
        { name: 'TailwindCSS' },
        { name: 'Boostrap' },
        { name: 'ShadeCN' },
      ],
    },
    {
      duration: 'Sep 2024 - Feb 2025',
      position: 'Backend Developer',
      company: 'Kyno Labs',
      mode: 'Online . Part-time',
      skills: [
        { name: 'Serverless Architecture' },
        { name: 'NodeJs' },
        { name: 'MongoDB' },
        { name: 'AWS' },
        { name: 'Time Management' },
        { name: 'Teamwork' },
        { name: 'Communication' },
        { name: 'Problem Solving' },
        { name: 'Adaptability' },
      ],
    },
    {
      duration: 'Mar 2020 - Jun 2021',
      position: 'IT Assistant',
      company: 'Ocnet e Solutions, Aranayake Rd, Alupotha, Ussapitiya ',
      mode: 'Full-time . Onsite',
      companyLink: 'https://www.liveroom.xyz/',
      skills: [
        { name: 'Microsoft Office Package' },
        { name: 'Teaching' },
        { name: 'VB6' },
        { name: 'HTML5' },
        { name: 'CSS' },
        { name: 'Networking' },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-gray-600 dark:text-fontGray">
        My work experience, spanning over 3 years, has been a journey of growth,
        learning, and innovation.
      </div>

      <div className="w-full overflow-x-hidden px-4 pb-20 md:h-[34rem] md:overflow-y-auto md:pb-0">
        <InteractiveTimeline experiences={Experience} />
      </div>
    </div>
  );
}

export default TimeLineExperienceSection;
