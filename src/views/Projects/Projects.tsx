import s from "./Projects.module.css";
import Project from "../../components/Project/Project";
import { useProjects } from "../../hooks/useProjects";
import NewProjectForm from "../../components/NewProjectForm/NewProjectForm";
import { ADMIN_EMAIL } from "../../constants";
import { ProjectsLoader } from "../../components/ProjectsLoader/ProjectsLoader";
const Projects = () => {
  const {
    data: { projects },
    error,
    loading,
    addProject,
  } = useProjects();

  return (
    <section className={s.projects}>
      <p className={s.title}>Projects</p>

      {JSON.parse(localStorage.getItem("login-data") || "{}")?.email ===
        ADMIN_EMAIL && <NewProjectForm onSubmit={addProject} />}

      {loading && <ProjectsLoader />}
      {error && <p>{error}</p>}
      <ul className={s.projectsList}>
        {[...projects].reverse().map((project) => (
          <Project
            key={project._id}
            poster={project.poster}
            title={project.title}
            id={project._id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
