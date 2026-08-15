'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollFloat from '@/components/animations/ScrollFloat';
import { Github, Star, ArrowUpRight, Terminal, GitBranch, Cpu, Award } from 'lucide-react';
import { projectsData, projectCardVariants, type ProjectItem } from '@/constants/projects';

// Helper function to render language dot colors
const getLanguageColor = (lang: string) => {
  switch (lang.toLowerCase()) {
    case 'typescript':
      return 'bg-blue-500';
    case 'javascript':
      return 'bg-yellow-400';
    case 'go':
      return 'bg-cyan-500';
    case 'java':
      return 'bg-red-500';
    case 'python':
      return 'bg-green-500';
    case 'jupyter notebook':
      return 'bg-orange-400';
    case 'c++':
      return 'bg-pink-500';
    default:
      return 'bg-gray-400';
  }
};

interface EditorMockupProps {
  repoName: string;
}

function EditorMockup({ repoName }: EditorMockupProps) {
  const getSidebarFiles = () => {
    if (repoName === 'Stunting-AI-Backend') {
      return (
        <div className="flex flex-col gap-1.5 font-mono text-[9px] text-body select-none">
          <div className="font-semibold text-ink flex items-center gap-1">
            <span className="text-[7px]">▼</span> src/
          </div>
          <div className="pl-3 text-brand font-medium flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" /> predict.js
          </div>
          <div className="pl-3 text-subtle flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> db.js
          </div>
          <div className="pl-3 text-subtle flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> routes.js
          </div>
          <div className="font-semibold text-ink mt-1 flex items-center gap-1">
            <span className="text-[7px]">▶</span> config/
          </div>
        </div>
      );
    }
    return (
      <div className="flex flex-col gap-1.5 font-mono text-[9px] text-body select-none">
        <div className="font-semibold text-ink flex items-center gap-1">
          <span className="text-[7px]">▼</span> curriculum/
        </div>
        <div className="pl-3 text-brand font-medium flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> advanced.ts
        </div>
        <div className="pl-3 text-subtle flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> react.ts
        </div>
        <div className="pl-3 text-subtle flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> node-api.ts
        </div>
        <div className="font-semibold text-ink mt-1 flex items-center gap-1">
          <span className="text-[7px]">▶</span> assets/
        </div>
      </div>
    );
  };

  const getTabs = () => {
    if (repoName === 'Stunting-AI-Backend') {
      return (
        <div className="flex items-center text-[9px] font-mono border-b border-hairline-soft bg-canvas-soft select-none overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 border-r border-hairline-soft bg-surface px-2.5 py-1 text-brand font-medium border-t-2 border-t-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" /> predict.js
          </div>
          <div className="flex items-center gap-1 border-r border-hairline-soft px-2.5 py-1 text-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> db.js
          </div>
          <div className="flex items-center gap-1 border-r border-hairline-soft px-2.5 py-1 text-subtle">
            package.json
          </div>
        </div>
      );
    }
    return (
      <div className="flex items-center text-[9px] font-mono border-b border-hairline-soft bg-canvas-soft select-none overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1 border-r border-hairline-soft bg-surface px-2.5 py-1 text-brand font-medium border-t-2 border-t-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> advanced.ts
        </div>
        <div className="flex items-center gap-1 border-r border-hairline-soft px-2.5 py-1 text-subtle">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> react.ts
        </div>
        <div className="flex items-center gap-1 border-r border-hairline-soft px-2.5 py-1 text-subtle">
          README.md
        </div>
      </div>
    );
  };

  const getCodeContent = () => {
    if (repoName === 'Stunting-AI-Backend') {
      return (
        <div className="space-y-0.5 font-mono text-[10px] leading-relaxed p-3 select-text">
          <div><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">1</span><span className="text-subtle">// Early stunting risk prediction ML api</span></div>
          <div><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">2</span><span className="text-brand font-medium">export async function</span> <span className="text-ink font-semibold">predictRisk</span>(<span className="text-body">req, res</span>) &#123;</div>
          <div><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">3</span>  <span className="text-brand font-medium">const</span> &#123; age, height, gender &#125; = <span className="text-body">req.body</span>;</div>
          <div><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">4</span>  <span className="text-brand font-medium">const</span> <span className="text-body">zScore</span> = <span className="text-ink font-semibold">calcZScore</span>(<span className="text-body">age, height, gender</span>);</div>
          <div><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">5</span>  </div>
          <div className="bg-timeline-edit/10 py-0.5 -mx-3 px-3"><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">6</span>  <span className="inline-flex items-center rounded bg-timeline-edit px-1 py-0.2 text-[7px] font-bold uppercase tracking-wider text-ink mr-2">Edit</span><span className="text-brand font-medium">if</span> (<span className="text-body">zScore &lt; -2.0</span>) &#123;</div>
          <div className="bg-timeline-edit/10 py-0.5 -mx-3 px-3"><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">7</span>    <span className="text-brand font-medium">return</span> <span className="text-success font-medium">"High Risk Alert"</span>;</div>
          <div><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">8</span>  &#125;</div>
          <div><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">9</span>  <span className="text-brand font-medium">return</span> <span className="text-success font-medium">"Optimal Growth"</span>;</div>
          <div><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">10</span>&#125;</div>
        </div>
      );
    }
    return (
      <div className="space-y-0.5 font-mono text-[10px] leading-relaxed p-3 select-text">
        <div><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">1</span><span className="text-subtle">// GDGOC study group React curriculum setup</span></div>
        <div><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">2</span><span className="text-brand font-medium">const</span> <span className="text-ink font-semibold">studySession</span> = &#123;</div>
        <div><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">3</span>  community: <span className="text-success font-medium">"GDG on Campus"</span>,</div>
        <div><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">4</span>  studentsCount: <span className="text-timeline-done font-bold">800</span>,</div>
        <div><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">5</span>  topics: [<span className="text-success font-medium">"React"</span>, <span className="text-success font-medium">"Tailwind"</span>, <span className="text-success font-medium">"Node.js"</span>],</div>
        <div className="bg-timeline-done/10 py-0.5 -mx-3 px-3"><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">6</span>  <span className="inline-flex items-center rounded bg-timeline-done px-1.5 py-0.2 text-[7px] font-bold uppercase tracking-wider text-canvas mr-2">Done</span>eval: <span className="text-success font-medium">"Grand Task Matchmaking"</span></div>
        <div><span className="text-subtle/40 select-none mr-2.5 w-3.5 inline-block text-right">7</span>&#125;;</div>
      </div>
    );
  };

  const getTerminalContent = () => {
    if (repoName === 'Stunting-AI-Backend') {
      return (
        <div className="flex items-center gap-2 border-t border-hairline-soft bg-canvas-soft px-3 py-1.5 font-mono text-[8px] text-body select-none">
          <Terminal className="h-3 w-3 text-subtle" />
          <span className="inline-flex items-center rounded bg-timeline-thinking/20 px-1 py-0.2 text-[7px] font-bold uppercase tracking-wider text-timeline-done">Thinking</span>
          <span className="text-subtle">analyzing nutritional data...</span>
          <span className="text-success font-medium">Risk: Low (Z: -1.02)</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2 border-t border-hairline-soft bg-canvas-soft px-3 py-1.5 font-mono text-[8px] text-body select-none">
        <Terminal className="h-3 w-3 text-subtle" />
        <span className="inline-flex items-center rounded bg-timeline-done/20 px-1 py-0.2 text-[7px] font-bold uppercase tracking-wider text-timeline-done font-mono">Done</span>
        <span className="text-subtle">study group modules active.</span>
      </div>
    );
  };

  return (
    <div className="mt-3 flex flex-col rounded-lg border border-hairline-soft bg-surface overflow-hidden text-left h-[180px] md:h-[190px]">
      {/* Title Bar */}
      <div className="flex items-center justify-between bg-canvas px-3 py-2 border-b border-hairline-soft select-none">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
          <span className="h-2 w-2 rounded-full bg-green-400/80" />
        </div>
        <div className="text-[9px] font-mono text-subtle flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-brand" /> editor.js
        </div>
        <div className="w-8" />
      </div>

      {/* Editor Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="hidden sm:block w-24 border-r border-hairline-soft bg-canvas-soft p-2.5 overflow-y-auto no-scrollbar">
          {getSidebarFiles()}
        </div>

        {/* Files Panel */}
        <div className="flex-1 flex flex-col overflow-hidden bg-surface">
          {getTabs()}
          <div className="flex-1 overflow-y-auto overflow-x-auto no-scrollbar">
            {getCodeContent()}
          </div>
        </div>
      </div>

      {/* Footer bar */}
      {getTerminalContent()}
    </div>
  );
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className={`pointer-events-auto group relative flex flex-col justify-between rounded-xl border border-hairline bg-surface transition-all duration-300 ease-out hover:scale-[1.02] hover:border-hairline-strong ${project.gridClass}`}
      style={{ opacity: 0, transform: 'translateY(40px) scale(0.98)' }}
      custom={index}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.15 }}
      variants={projectCardVariants}
    >
      <div className="w-full h-full flex flex-col justify-between p-5 md:p-6">
        {/* Card Header & Content */}
        <div className="space-y-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {project.featured ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-timeline-thinking/10 px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-brand">
                  <Cpu className="h-3 w-3" />
                  Featured
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-surface-strong px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-ink">
                  <GitBranch className="h-3 w-3" />
                  Repository
                </span>
              )}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle hover:text-ink transition-colors duration-200"
              aria-label={`View ${project.title} on GitHub`}
            >
              <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div>
            <h3 className="text-ink text-base font-semibold tracking-tight sm:text-lg">
              {project.title}
            </h3>
            <p className="text-body mt-1.5 text-xs font-normal leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* IDE Mockup render for Featured projects */}
          {project.featured && <EditorMockup repoName={project.repoName} />}
        </div>

        {/* Card Footer Section */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-hairline-soft pt-3.5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className={`h-2.5 w-2.5 rounded-full ${getLanguageColor(project.language)}`} />
              <span className="font-mono text-xs text-body">{project.language}</span>
            </div>

            {project.stars > 0 && (
              <div className="flex items-center gap-1 text-subtle">
                <Star className="h-3.5 w-3.5 fill-current text-yellow-500" />
                <span className="font-mono text-xs">{project.stars}</span>
              </div>
            )}
          </div>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="bg-surface-strong font-mono text-[9px] font-semibold uppercase tracking-wider text-ink px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// GitHub Contribution Grid component for the bento card
const ContributionGrid = () => {
  const contributions = [
    [2, 0, 1, 3, 0, 2, 4, 1, 0, 2, 3, 1, 0, 2],
    [0, 1, 2, 0, 3, 1, 0, 2, 4, 1, 0, 3, 1, 0],
    [3, 2, 0, 4, 1, 0, 2, 3, 1, 0, 2, 4, 0, 3],
    [1, 0, 3, 1, 2, 4, 1, 0, 3, 2, 1, 0, 4, 1],
  ];

  const getColorClass = (level: number) => {
    switch (level) {
      case 0:
        return 'bg-canvas-soft/10';
      case 1:
        return 'bg-brand/25';
      case 2:
        return 'bg-brand/50';
      case 3:
        return 'bg-brand/75';
      case 4:
        return 'bg-brand';
      default:
        return 'bg-canvas-soft/10';
    }
  };

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-canvas-soft/10 bg-surface/5 p-3 select-none w-full max-w-[210px] md:max-w-none">
      <div className="flex items-center justify-between text-[8px] font-mono text-canvas-soft/60">
        <span>mahesabagusr/contributions</span>
        <span>Last 14 weeks</span>
      </div>
      <div className="grid grid-flow-col grid-rows-4 gap-1 justify-between">
        {contributions.flat().map((level, i) => (
          <div
            key={i}
            className={`h-2.5 w-2.5 rounded-sm transition-all duration-300 hover:scale-125 ${getColorClass(level)}`}
          />
        ))}
      </div>
    </div>
  );
};

// GitHub profile bento card
interface GitHubCardProps {
  index: number;
}

function GitHubCard({ index }: GitHubCardProps) {
  return (
    <motion.div
      className="pointer-events-auto group relative flex flex-col justify-between rounded-xl border border-hairline bg-ink p-6 text-canvas transition-all duration-300 ease-out hover:scale-[1.02] md:col-span-2 md:row-span-1 min-h-[220px] md:h-auto"
      style={{ opacity: 0, transform: 'translateY(40px) scale(0.98)' }}
      custom={index}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.15 }}
      variants={projectCardVariants}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center justify-between h-full">
        {/* Left Side: Stats and Info */}
        <div className="flex flex-col justify-between flex-1 space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand/20 px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-brand">
                <Award className="h-3.5 w-3.5" />
                GitHub Activity
              </span>
              <Github className="h-4.5 w-4.5 text-canvas-soft opacity-60" />
            </div>

            <div>
              <h3 className="text-canvas text-base font-semibold tracking-tight sm:text-lg">
                Explore More Repositories
              </h3>
              <p className="text-canvas-soft/70 mt-1.5 text-xs font-normal leading-relaxed">
                I build API services, AI agents, CLI systems, and development guides. Explore all my open source contributions.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-canvas-soft/10 pt-3">
            <div className="flex items-center gap-3 text-[10px] font-mono text-canvas-soft/70">
              <span>40+ Repositories</span>
              <span>•</span>
              <span>Active Contributor</span>
            </div>

            <a
              href="https://github.com/mahesabagusr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-brand px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-canvas transition-colors duration-300 hover:bg-brand-active"
            >
              Go to GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Right Side: Heatmap Grid */}
        <div className="flex items-center justify-center md:justify-end md:w-56">
          <ContributionGrid />
        </div>
      </div>
    </motion.div>
  );
}

interface ProjectsProps {
  initialProjects?: ProjectItem[];
}

export default function Projects({ initialProjects }: ProjectsProps): React.JSX.Element {
  const displayProjects = initialProjects && initialProjects.length > 0 ? initialProjects : projectsData;

  return (
    <section
      id="projects"
      className="pointer-events-none relative z-10 mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="space-y-8 sm:space-y-12">
        {/* Heading */}
        <div className="text-center">
          <p className="eyebrow text-subtle mb-3">Projects</p>
          <ScrollFloat
            containerClassName="mb-3"
            textClassName="text-ink !text-3xl sm:!text-4xl xl:!text-4xl"
            scrollStart="top bottom"
            scrollEnd="center center"
          >
            My Open Source Works
          </ScrollFloat>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-fr">
          {/* Render first 5 project cards */}
          {displayProjects.slice(0, 5).map((project, index) => (
            <ProjectCard key={project.repoName} project={project} index={index} />
          ))}

          {/* GitHub Activity bento card (occupies index 5 slot) */}
          <GitHubCard index={5} />

          {/* Render remaining project cards (starts at index 5 in displayProjects) */}
          {displayProjects.slice(5).map((project, index) => (
            <ProjectCard key={project.repoName} project={project} index={index + 6} />
          ))}
        </div>
      </div>
    </section>
  );
}
