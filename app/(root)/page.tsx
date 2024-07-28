// Homepage
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectsList from "@/components/ProjectsList";
import { getAllProjects } from "@/lib/api";

export default function Home() {
  const allProjects = getAllProjects();


  return (
    <div className="flex flex-col md:mx-32">
    <Header/>
    <main className="min-h-screen ">
      <ProjectsList allProjects={allProjects}/>
    </main>
    <Footer/>
    </div>
  );
}
