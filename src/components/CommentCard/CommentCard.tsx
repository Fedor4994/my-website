import { Comment } from "../../types/Comment";
import s from "./CommentCard.module.css";

const CommentCard = ({ comment }: { comment: Comment }) => {
  return (
    <div className={s.commentCard}>
      <img className={s.avatar} src={comment.avatar} alt="avatar" />

      <div className={s.mainData}>
        <div className={s.about}>
          <p className={s.username}>{comment.username}</p>
          <p>{new Date(comment.createdAt).toLocaleString().slice(0, 17)}</p>
        </div>

        <p>{comment.text}</p>
      </div>
    </div>
  );
};

export default CommentCard;
