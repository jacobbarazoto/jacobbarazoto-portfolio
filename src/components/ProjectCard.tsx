import type { Project, ProjectStatus } from "../data/site";

const STATUS_LABEL: Record<ProjectStatus, string> = {
  live: "Live",
  wip: "In progress",
  archived: "Archived",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project">
      <div className="project-head">
        <h2>{project.title}</h2>
        <span className={`status status-${project.status}`}>
          {STATUS_LABEL[project.status]}
        </span>
        <span className="year">{project.year}</span>
      </div>

      <p className="project-blurb">{project.blurb}</p>

      <ul className="tags">
        {project.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <div className="project-actions">
        {project.liveUrl && (
          <a className="action primary" href={project.liveUrl} target="_blank" rel="noreferrer">
            Visit ↗
          </a>
        )}
        {project.repoUrl && (
          <a className="action" href={project.repoUrl} target="_blank" rel="noreferrer">
            Source
          </a>
        )}
      </div>
    </article>
  );
}
