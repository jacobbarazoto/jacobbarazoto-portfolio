import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/site";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Hero />

      <main>
        <h2 className="section-label">Things I've built</h2>
        <div className="projects">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Jacob Barazoto</span>
        <span>Built with React · Hosted on Firebase</span>
      </footer>
    </div>
  );
}

export default App;
