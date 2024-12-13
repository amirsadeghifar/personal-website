export type ProjectCardType = {
  title: string;
  description: string;
  image_url: string;
  skills: string[];
  slug: string;
  github?: string;
  live?: string;
  users?: number;
};

export type ProjectType = {
  title: string;
  description: string;
  image_url: string;
  skills: string[];
  slug: string;
  github?: string;
  live?: string;
  users?: number;
  overview: string;
  features: string[];
  obstacles: string[];
  results: string;
};

export const project_card: ProjectCardType[] = [
  {
    title: "Splinter",
    description:
      "An open-source tool that transforms unstructured data into vectorized formats for AI workflows.",
    image_url: "/splinter-home.png",
    skills: ["Python", "Typescript", "AWS", "Tailwind"],
    slug: "splinter",
    live: "https://splinter-app.github.io",
    users: 80,
  },
];

export const skills: { image_url: string; title: string }[] = [
  { image_url: "/typescript.svg", title: "TypeScript" },
  { image_url: "/javascript.svg", title: "JavaScript" },
  { image_url: "/python.svg", title: "Python" },
  { image_url: "/react.svg", title: "React" },
  { image_url: "/aws.svg", title: "Aws" },
  { image_url: "/express.svg", title: "Express" },
  { image_url: "/node.svg", title: "Node" },
  { image_url: "/mongo.svg", title: "Mongo" },
  { image_url: "/tailwind.svg", title: "Tailwind" },
  // { image_url: "/next.svg", title: "Next" },
  // { image_url: "/firebase.svg", title: "Firebase" },
  // { image_url: "/mysql.svg", title: "MySql" },
  // { image_url: "/java.svg", title: "Java" },
  // { image_url: "/c.svg", title: "C" },
];

// export const projects: ProjectType[] = [
//   {
//     title: "Splinter",
//     description:
//       "An open-source tool that transforms unstructured data into vectorized formats for AI workflows.",
//     image_url: "/splinter-feat.png",
//     skills: ["Next.js", "Tailwind", "Typescript", "Firebase", "AWS"],
//     slug: "splinter",
//     live: "https://splinter-app.github.io",
//     users: 40,
//     overview:
//       "webportfolios.dev is a platform that enables users to help others find inspiration, improving their own design, and how to showcase their skills effectively from browsing a directory of developer portfolios uploaded by other developers.",
//     features: [
//       "Engineered a scalable ingestion pipeline using AWS services (S3, Lambda, ECS Fargate, Batch) to process documents simultaneously in isolated, containerized environments",
//       "Streamlined deployment workflows by creating a CLI tool for infrastructure automation, enabling developers to deploy and manage the pipeline with a single command",
//       "Reduced operational complexity by integrating event-driven triggers from S3 to ECS, ensuring real-time updates and eliminating stale data risks in downstream applications",
//       "Built observability tools in the frontend with React, providing real-time insights into ingestion pipeline status and processing metrics",
//       "Containerized ingestion scripts and optimized AWS Fargate performance by creating lightweight Docker images and refining resource allocations, boosting efficiency by 70%",
//       "Deployed a RAG evaluation sandbox, enabling experimentation with AI workflows and validating vectorized data",
//     ],
//     obstacles: [
//       "Initial issues properly configuring puppeteer on Lambda function, solved by researching further into chromium.",
//       "Using next/mdx package for blog, the docs were outdated and had to implement my own solutions to properly render and manage MDX content",
//     ],
//     results:
//       "Successfully onboarded 46 users who submitted portfolios within the first month. Positive feedback from users, citing ease of use and valuable insights for portfolio improvement. Established as a go-to resource for all developers seeking inspiration.",
//   },
// ];
