import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

type Education = {
  duration: string;
  institute: string;
  subject: string;
  stream?: string;
  result: string;
};

function EducationSection() {
  const Education: Education[] = [
    {
      duration: 'Expected in 2025',
      institute: 'University of Moratuwa',
      subject: 'BSc (Hons.) in Information Technology',
      result: 'CGPA - 3.16',
    },
    {
      duration: '2019',
      subject: 'G.C.E. Advance Level',
      institute: "Pushpadana Girls' College Kandy",
      stream: 'Biological Science Stream',
      result: "2 A's , 1 C",
    },
    {
      duration: '2015',
      subject: 'G.C.E. Ordinary Level',
      institute: "Pushpadana Girls' College Kandy",
      result: "9 A's",
    },
  ];
  return (
    <div>
      <div className="text-fontGray">
        My academic journey, spanning over 4 years, has been a journey of
        growth, learning, and innovation.
      </div>
      <div className="mx-4 max-w-xl py-12">
        <div className="relative border-l-4 border-Secondary py-4 pl-8">
          <div className="mb-0 space-y-12">
            {Education.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="absolute -left-2">
                  {/* <div className="h-5 w-5 rounded-full bg-Secondary"></div> */}
                  <FaDotCircle className="mt-2 h-3 w-3 text-Secondary" />
                </div>

                <p className="mb-2 text-Secondary">{item.duration}</p>
                <h3 className="text-2xl font-semibold">{item.subject}</h3>
                <p className="mb-3 text-lg">{item.institute}</p>
                {item.stream && (
                  <p className="text-lg text-fontGray">{item.stream}</p>
                )}
                <p className="text-lg text-fontGray">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
