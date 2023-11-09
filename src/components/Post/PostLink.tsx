import { Link } from "react-router-dom";
import s from "./PostLink.module.css";

type PostLinkProps = {
  date: string;
  title: string;
  _id: string;
};
const PostLink = ({ date, title, _id }: PostLinkProps) => {
  return (
    <li className={s.linkWrapper}>
      <p className={s.data}>{date}</p>
      <Link className={s.link} to={`post/${_id}`}>
        {title}
      </Link>
    </li>
  );
};

export default PostLink;
