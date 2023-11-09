import { useState } from "react";
import { useGoogleAuth } from "../../hooks/useGoogleAuth";
import { GoogleLogin } from "@react-oauth/google";
import s from "./CommentsForm.module.css";
import { CommentData } from "../../types/Comment";

type CommentsFormProps = {
  onSubmit: (post: CommentData) => void;
};

const CommentsForm = ({ onSubmit }: CommentsFormProps) => {
  const { loginData, login, logout } = useGoogleAuth();

  const [logoutShown, setLogoutShown] = useState(false);
  const [comment, setComment] = useState("");

  const showLogout = () => {
    setLogoutShown(true);
  };

  const hideLogout = () => {
    setLogoutShown(false);
  };

  const addComment = (e: any) => {
    e.preventDefault();
    onSubmit({ text: comment, userId: loginData?._id || "" });
    setComment("");
  };

  return loginData ? (
    <form className={s.comment} onSubmit={addComment}>
      <div className={s.commentHead}>
        <div
          onMouseEnter={showLogout}
          onMouseLeave={hideLogout}
          className={s.avatar}
        >
          <img
            className={s.proifleImage}
            src={loginData.picture}
            alt="profile"
          />
          {logoutShown && (
            <button className={s.logoutButton} onClick={logout}>
              ✖
            </button>
          )}
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={s.commentArea}
          placeholder="Leave a comment"
        ></textarea>
      </div>
      <button
        className={`${s.sendButton} ${comment.length === 0 && s.disableButton}`}
      >
        Comment
      </button>
    </form>
  ) : (
    <div>
      <p className={s.signin}>Sign in to comment:</p>
      <GoogleLogin
        size="medium"
        onSuccess={(credentialResponse) => {
          login({ token: credentialResponse.credential || "" });
        }}
        onError={() => {
          alert("Login Failed");
        }}
      />
    </div>
  );
};

export default CommentsForm;
