import { Comment } from "../../types/Comment";
import CommentCard from "../CommentCard/CommentCard";
import s from "./CommentsList.module.css";
import { FaComments } from "react-icons/fa";

const CommentsList = ({ comments }: { comments: Comment[] }) => {
  return (
    <div className={s.commentsWrapper}>
      <span className={s.title}>
        <FaComments />
        Comments:
      </span>
      {comments.length === 0 ? (
        <p className={s.empty}>There not comments yet</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <CommentCard comment={comment} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsList;
