import { projects } from "@/data/projectsData";

export default function sitemap() {
  const baseUrl = "https://imdigvijaysingh.com";
  const currentDate = new Date().toISOString();

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hackathon`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...projectRoutes,
  ];
}
