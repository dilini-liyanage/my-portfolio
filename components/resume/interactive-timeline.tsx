'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Timeline } from '@/types/time-line';

export function InteractiveTimeline({ experiences }: Timeline) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-Secondary/50 to-Secondary" />

      {/* Experience cards */}
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <TimelineCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineCard({
  experience,
  index,
}: {
  experience: Timeline['experiences'][0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative ml-6 cursor-pointer"
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute -left-7 h-3 w-3 rounded-full bg-Secondary"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.2, delay: index * 0.2 }}
      />

      {/* Experience card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-all dark:border-gray-800 dark:bg-gray-900"
      >
        <div className="mb-2 text-xs font-medium text-Secondary dark:font-light">
          {experience.duration}
        </div>
        <h3 className="text-xl font-medium transition-colors group-hover:text-Secondary">
          {experience.position}
        </h3>
        <a
          href={experience.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-Secondary dark:text-gray-400"
        >
          {experience.company} . {experience.mode}
        </a>
        {experience.contribution && (
          <div className="mt-2">
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Contributions:
            </h4>
            <ul className="list-disc pl-5 text-sm font-light text-gray-600 dark:text-gray-400">
              {experience.contribution.map(
                (contribution, contributionIndex) => (
                  <li key={contributionIndex}>{contribution.name}</li>
                )
              )}
            </ul>
          </div>
        )}

        {/* Skills tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {experience.skills.map((skill, skillIndex) => (
            <motion.span
              key={skillIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200"
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
