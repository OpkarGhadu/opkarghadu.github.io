import { Project } from "@/interfaces/project";
import Link from "next/link";

interface Props {
    allProjects: Project[];
}


export default function ProjectsList({allProjects} : Props){

    return(

            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map((project) => (
                  <div
                    className="bg-white shadow-md rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-lg transition duration-300 ease-in-out"
                    key={project.slug}
                  >
                    <Link href={`/projects/${project.slug}`} className="block p-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={project.coverImage}
                            alt="Icon"
                            width={48}
                            height={48}
                          />
                          <h2 className="text-3xl font-semibold">{project.title}</h2>
                        </div>
                        <p className="mt-2 text-gray-600">{project.excerpt}</p>
    
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
}