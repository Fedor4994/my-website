import { useParams } from "react-router-dom";
import s from "./ProjectPage.module.css";
import { useProject } from "../../hooks/useProject";

const ProjectPage = () => {
  const { id = "" } = useParams();

  const { project, error, loading } = useProject(id);

  return (
    <section className={s.profile}>
      <p className={s.title}>{project?.title}</p>

      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <div className={s.buttonWrapper}>
            <a
              href={project?.source_link}
              target="_blank"
              rel="noreferrer"
              className={s.sourceButton}
            >
              View Source Code
            </a>
            <a
              href={project?.link}
              target="_blank"
              rel="noreferrer"
              className={s.sourceButton}
            >
              View In Action!
            </a>
          </div>
          <b className={s.aboutTitle}>About</b>
          <p className={s.about}>{project?.description}</p>

          {project?.technologies[0] === "[" && (
            <>
              <b className={s.aboutTitle}>Technologies:</b>
              <ul className={s.techList}>
                {JSON.parse(project.technologies).map((tech: string) => (
                  <li key={tech} className={s.techItem}>
                    {tech}
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default ProjectPage;
