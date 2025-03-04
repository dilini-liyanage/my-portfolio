'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { GithubIcon, LinkIcon, ChevronUpIcon } from 'lucide-react';
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
                className="group rounded-lg border bg-card transition-colors hover:bg-card/90"
              >
                <AccordionTrigger
                  id={`accordion-${idx}`}
                  className="w-full group-data-[state=open]:hidden"
                >
                  <div className="flex w-full items-center gap-6">
                    <div className="relative h-20 w-32 overflow-hidden rounded-md">
                      <Image
                        src={project.heroImage}
                        alt={project.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col items-start text-left">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="group-data-[state=closed]:hidden">
                  <div className="px-6 py-4">
                    <div className="flex gap-8">
                      <div className="w-2/3">
                        <div className="relative aspect-video overflow-hidden rounded-xl">
                          <Image
                            src={project.heroImage}
                            alt={project.name}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>

                      <div className="w-1/3 space-y-4">
                        <div className="flex items-start justify-between">
                          <h4 className="mb-2 text-lg font-semibold">
                            Description
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
                            <ChevronUpIcon className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="text-muted-foreground">
                          {project.description}
                        </p>

                        <div>
                          <h4 className="mb-2 text-lg font-semibold">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill) => (
                              <span
                                key={skill.name}
                                className="rounded-full bg-secondary/10 px-4 py-1 text-sm"
                              >
                                {skill.name}
                              </span>
                            ))}
                          </div>
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
