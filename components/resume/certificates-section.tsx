import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

type Certificate = {
  subject: string;
  issuedBy: string;
  issuedDate: string;
  credentialLink: string;
};

function CertificateSection() {
  const Certificate: Certificate[] = [
    {
      subject: 'AWS Educate Getting Started with Serverless',
      issuedBy: 'Amazon Web Services (AWS)',
      issuedDate: 'Issued Jan 2024',
      credentialLink:
        'https://www.credly.com/badges/42ca6ace-0e23-48ed-857a-28f1d601d8dc/linked_in_profile',
    },
    {
      subject: 'Programming with JavaScript',
      issuedBy: 'Coursera',
      issuedDate: 'Issued Aug 2023',
      credentialLink:
        'https://www.coursera.org/account/accomplishments/certificate/WZDVGMXUZ8KQ',
    },
    {
      subject: 'Introduction to Front-End Development',
      issuedBy: 'Coursera',
      issuedDate: 'Issued Jul 2023',
      credentialLink:
        'https://www.coursera.org/account/accomplishments/certificate/7LUT8JPJSKT8',
    },
  ];
  return (
    <div>
      <div className="text-fontGray">
        The volunteering experiences that I have gained over the years have
        taught me the importance of teamwork, communication, and adaptability.
        These experiences have not only enhanced my skills but also shaped my
        approach to problem-solving and decision-making.
      </div>
      <div className="grid grid-rows-4 gap-6 pt-12">
        {Certificate.map((item, index) => (
          <div key={index} className="flex gap-5 rounded-xl">
            <div>
              <FaDotCircle className="mt-2 text-Secondary" />
            </div>
            <div>
              <div className="flex gap-2">
                <div className="text-2xl">{item.subject}</div>
              </div>
              <div className="mb-2 text-sm text-fontGray">
                {item.issuedDate}
              </div>
              <div className="w-fit rounded-full border border-Secondary px-4 py-2 text-xs">
                <a
                  href={item.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span> View Credential </span>
                  <span className="ml-2">
                    {' '}
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificateSection;
