import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getAllProjects, getProjectBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";

type Params = {
    params: {
      slug: string;
    };
};

// Build evrey project page
export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
      slug: project.slug,
    }));
  }

export default async function Page({params}: Params){
    const project = getProjectBySlug(params.slug)
    if (!project) {
        return notFound();
    }
    const content = await markdownToHtml(project.content || "");


    // Get headings as Table of Content
    // Put everything on one page

    return(
      <div className="flex flex-col md:mx-32">
      <Header />
      <main className="min-h-screen p-8">
        <div className="flex items-center gap-4 mb-8">
          <img src={project.coverImage} alt="" width={32} height={32}/>
          <h1 className="text-4xl font-semibold">{project.title}</h1>
          <a href={project.github}>
            <img 
              src={'/github.svg' }
              alt="Link"
              width={32}
              height={32}/>
          </a>
        </div>
        
        <article>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
        
      </main>
      <Footer />
    </div>
    );
}