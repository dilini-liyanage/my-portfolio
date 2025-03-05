'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { GithubIcon, LinkIcon, ChevronUpIcon, CircleDot } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/lib/data/projects';
import { useTheme } from 'next-themes';
const ProjectShowcase = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-0 pt-0 dark:from-background dark:to-background/90 md:pt-20">
      <div className="container mx-auto w-full py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-Secondary"
        >
          Some of my work
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-xl text-muted-foreground"
        >
          These are some of the projects I&apos;ve worked on.
        </motion.div>

        {/* Project details */}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {projects.map((project, idx) => (
              <AccordionItem
                key={project.name}
                value={`item-${idx}`}
                className="group mb-8 rounded-none border transition-colors dark:border-gray-800 dark:bg-gray-900"
              >
                <AccordionTrigger
                  id={`accordion-${idx}`}
                  className="w-full p-2 group-data-[state=open]:hidden"
                >
                  <div className="grid grid-cols-7 items-center gap-6">
                    <div className="relative col-span-2 h-48 w-auto overflow-hidden rounded-md">
                      <Image
                        src={project.heroImage}
                        alt={project.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="col-span-5 flex flex-col items-start text-left">
                      <div className="flex w-full items-start justify-between">
                        <h3 className="mb-2 text-xl font-medium text-white hover:text-Secondary">
                          {project.name}
                        </h3>
                      </div>
                      <p className="mb-2 text-sm text-fontGray">
                        {project.description}
                      </p>
                      <p className="mb-3 flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <span
                            key={skill.name}
                            className="rounded-full bg-gray-800 px-4 py-1 text-xs font-light text-gray-200"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </p>
                      <div className="flex gap-2">
                        <div className="flex rounded-lg bg-Secondary px-2 py-1 text-sm text-white transition-transform">
                          View more
                        </div>
                        {project.github_link && (
                          <a
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-black p-0 text-white transition-transform hover:scale-110 dark:bg-white dark:text-black"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <GithubIcon className="h-4 w-4" />
                          </a>
                        )}
                        {project.hosted_link && (
                          <a
                            href={project.hosted_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-Secondary p-2 text-white transition-transform hover:scale-110"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <LinkIcon className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="max-h-[600px] border-l-2 border-Secondary border-opacity-50 group-data-[state=closed]:hidden">
                  <div className="px-6 py-4">
                    <div className="grid grid-cols-6 gap-8">
                      <div className="col-span-3">
                        <div className="relative aspect-video overflow-hidden rounded-xl">
                          <Image
                            src={project.heroImage}
                            alt={project.name}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>

                      <div className="col-span-3 w-auto space-y-4 overflow-y-auto">
                        <div className="flex items-start justify-between">
                          <h4 className="mb-2 text-lg font-semibold text-Secondary">
                            {project.name}
                          </h4>
                          <button
                            onClick={() =>
                              document
                                .getElementById(`accordion-${idx}`)
                                ?.click()
                            }
                            className="rounded-full p-2 transition-colors hover:bg-secondary/10"
                            aria-label="Collapse panel"
                          >
                            <ChevronUpIcon className="h-5 w-5 text-Secondary" />
                          </button>
                        </div>
                        <div className="max-h-[500px] space-y-4 overflow-y-auto">
                          <p className="text-muted-foreground">
                            {project.description}
                          </p>
                          <div>
                            <h4 className="mb-2 text-lg font-medium text-white dark:text-gray-200">
                              My Contributions
                            </h4>
                            <div>
                              {project.my_contribution.map((contribution) => (
                                <div
                                  key={contribution.title}
                                  className="mb-2 flex items-start gap-2"
                                >
                                  <CircleDot className="mt-1 h-4 w-4 text-Secondary" />
                                  <div>
                                    <p className="font-medium text-gray-300">
                                      {contribution.title}
                                    </p>
                                    <p className="text-xs font-light text-muted-foreground">
                                      {contribution.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="mb-3 flex flex-wrap gap-2">
                              {project.skills.map((skill) => (
                                <span
                                  key={skill.name}
                                  className="rounded-full bg-gray-800 px-4 py-1 text-xs font-light text-gray-200"
                                >
                                  {skill.name}
                                </span>
                              ))}
                            </p>
                          </div>

                          <div className="flex gap-4">
                            {project.github_link && (
                              <a
                                href={project.github_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-black p-2 text-white transition-transform hover:scale-110 dark:bg-white dark:text-black"
                              >
                                <GithubIcon className="h-5 w-5" />
                              </a>
                            )}
                            {project.hosted_link && (
                              <a
                                href={project.hosted_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-Secondary p-2 text-white transition-transform hover:scale-110"
                              >
                                <LinkIcon className="h-5 w-5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
