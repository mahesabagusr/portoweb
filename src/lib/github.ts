import { projectsData, type ProjectItem } from '@/constants/projects';

export async function getGitHubProjects(): Promise<ProjectItem[]> {
  const token = process.env.GITHUB_TOKEN;

  return Promise.all(
    projectsData.map(async (project) => {
      try {
        const headers: HeadersInit = {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-Website-Antigravity',
        };

        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }

        const res = await fetch(`https://api.github.com/repos/mahesabagusr/${project.repoName}`, {
          next: { revalidate: 3600 }, // Cache on server for 1 hour (3600 seconds)
          headers,
        });

        if (res.ok) {
          const data = await res.json();
          return {
            ...project,
            stars: typeof data.stargazers_count === 'number' ? data.stargazers_count : project.stars,
            description: data.description || project.description,
            language: data.language || project.language,
          };
        } else {
          console.warn(`GitHub API returned status ${res.status} for ${project.repoName}. Falling back to static data.`);
        }
      } catch (error) {
        console.error(`Failed to fetch live GitHub stats for ${project.repoName}:`, error);
      }
      // Fallback directly to the pre-defined constants on error or rate-limits
      return project;
    })
  );
}
