import type { Variants } from 'framer-motion';

export interface ProjectItem {
  title: string;
  repoName: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  tags: string[];
  gridClass: string; // Tailwind grid span classes
  featured: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    title: 'Stunting AI Backend',
    repoName: 'Stunting-AI-Backend',
    description: 'An AI-powered backend service designed for early stunting detection and children\'s nutritional health analysis. Leverages machine learning models to classify growth metrics and provides automated dietary recommendations via a clean REST API.',
    url: 'https://github.com/mahesabagusr/Stunting-AI-Backend',
    language: 'JavaScript',
    stars: 1,
    tags: ['Node.js', 'Express', 'AI Integration', 'REST API', 'JSON Web Token'],
    gridClass: 'md:col-span-2 md:row-span-2 h-[340px] md:h-auto',
    featured: true,
  },
  {
    title: 'KAI AI Planner',
    repoName: 'kai-ai-planner',
    description: 'An intelligent assistant for train journey coordination and trip planning. Simplifies route scheduling, connections, and itinerary management with AI-driven recommendations.',
    url: 'https://github.com/mahesabagusr/kai-ai-planner',
    language: 'JavaScript',
    stars: 0,
    tags: ['Node.js', 'Express', 'OpenAI API', 'Trip Scheduling'],
    gridClass: 'md:col-span-1 md:row-span-1 h-[220px] md:h-auto',
    featured: false,
  },
  {
    title: 'Esports Tournament Engine',
    repoName: 'esport-go-tubes',
    description: 'A tournament matchmaking and bracket management engine built in Go. Optimized for high-concurrency match updates and live performance statistics.',
    url: 'https://github.com/mahesabagusr/esport-go-tubes',
    language: 'Go',
    stars: 1,
    tags: ['Go', 'Concurrency', 'Matchmaking', 'Data Structures'],
    gridClass: 'md:col-span-1 md:row-span-1 h-[220px] md:h-auto',
    featured: false,
  },
  {
    title: 'GDGOC Curriculum & Resources',
    repoName: 'intemediate-javascript',
    description: 'Comprehensive curriculum and hands-on laboratory resources compiled for Google Developer Groups on Campus (GDGOC) study sessions, teaching advanced React, Tailwind CSS, and Node.js to 800+ university students.',
    url: 'https://github.com/mahesabagusr/intemediate-javascript',
    language: 'JavaScript',
    stars: 0,
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Mentorship', 'REST API'],
    gridClass: 'md:col-span-2 md:row-span-1 h-[240px] md:h-auto',
    featured: true,
  },
  {
    title: 'Hate Speech & Sentiment Analysis',
    repoName: 'dka-hate-speech-sentiment-analysis',
    description: 'A sentiment analysis notebook applying natural language processing (NLP) to detect hate speech. Evaluates text classifiers using Python data science libraries.',
    url: 'https://github.com/mahesabagusr/dka-hate-speech-sentiment-analysis',
    language: 'Jupyter Notebook',
    stars: 0,
    tags: ['Python', 'NLP', 'Jupyter', 'Sentiment Analysis', 'Pandas'],
    gridClass: 'md:col-span-1 md:row-span-1 h-[220px] md:h-auto',
    featured: false,
  },
  {
    title: 'Smart Waste Management System',
    repoName: 'smartwaste',
    description: 'An object-oriented Java application simulating smart waste monitoring and route optimization for trash bins. Developed with strict OOP principles and a desktop GUI.',
    url: 'https://github.com/mahesabagusr/smartwaste',
    language: 'Java',
    stars: 0,
    tags: ['Java', 'OOP', 'Desktop GUI', 'IoT Simulation'],
    gridClass: 'md:col-span-1 md:row-span-1 h-[220px] md:h-auto',
    featured: false,
  },
];

export const projectCardVariants: Variants = {
  offscreen: (index: number) => ({
    y: 40,
    opacity: 0,
    scale: 0.98,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.6,
      delay: index * 0.08,
    },
  }),
  onscreen: (index: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.6,
      delay: index * 0.08,
    },
  }),
};
