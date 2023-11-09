import s from "./Project.module.css";
import { Link } from "react-router-dom";

type ProjectProps = {
  poster: string;
  title: string;
  id: string;
};
const Project = ({ poster, title, id }: ProjectProps) => {
  return (
    <div className={s.project}>
      <img className={s.poster} src={poster} alt="poster" />
      <div className={s.description}>
        <span className={s.title}>{title}</span>
        <Link to={id} className={s.detailsButton}>
          Take a look
        </Link>
      </div>
    </div>
  );
};

export default Project;
