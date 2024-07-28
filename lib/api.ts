import { Project } from "@/interfaces/project";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const ProjectsDirectory = join(process.cwd(), "data/_projects");

export function getProjectSlugs() {
  return fs.readdirSync(ProjectsDirectory);
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(ProjectsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Project;
}



export function getAllProjects(): Project[]{
    const slugs = getProjectSlugs();
    const Projects = slugs
      .map((slug) => getProjectBySlug(slug))
      // sort Projects by date in descending order
      .sort((Project1, Project2) => (Project1.date > Project2.date ? -1 : 1));
    return Projects;
}