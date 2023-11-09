import { useParams } from "react-router-dom";
import s from "./PostPage.module.css";
import { usePost } from "../../hooks/usePost";
import { formatText } from "../../utils";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import { ADMIN_EMAIL } from "../../constants";
import { useState } from "react";
import CommentsList from "../../components/CommentsList/CommentsList";
import { useComments } from "../../hooks/useComments";

const PostPage = () => {
  const { id = "" } = useParams();

  const { post, error, loading, editPost } = usePost(id);
  const {
    comments,
    error: commentsError,
    loading: commentsLoading,
    addComment,
  } = useComments({ postId: id });

  const [isTitileHovered, setIsTitleHovered] = useState(false);
  const [isTextHovered, setIsTextHovered] = useState(false);

  const [isTitleEdited, setIsTitleEdited] = useState(false);
  const [isTextEdited, setIsTextEdited] = useState(false);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const hoverTitle = () => {
    if (
      JSON.parse(localStorage.getItem("login-data") || "{}")?.email ===
      ADMIN_EMAIL
    ) {
      setIsTitleHovered(true);
    }
  };

  const hoverText = () => {
    if (
      JSON.parse(localStorage.getItem("login-data") || "{}")?.email ===
      ADMIN_EMAIL
    ) {
      setIsTextHovered(true);
    }
  };

  return (
    <div>
      <section className={s.post}>
        {error && <p>{error}</p>}

        {!loading && !error && (
          <>
            {isTitleEdited ? (
              <form
                className={s.editForm}
                onSubmit={() => {
                  if (post) {
                    editPost({ ...post, title });
                    setIsTitleEdited(false);
                  }
                }}
              >
                <input
                  className={s.editInput}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">save changes</button>
                <button onClick={() => setIsTitleEdited(false)}>cancel</button>
              </form>
            ) : (
              <div
                onMouseEnter={hoverTitle}
                onMouseLeave={() => setIsTitleHovered(false)}
                className={s.textWrapper}
              >
                <h1 className={s.title}>{post?.title}</h1>
                {isTitileHovered && post && (
                  <button
                    className={s.editButton}
                    onClick={() => {
                      setIsTitleEdited(true);
                      setIsTextEdited(false);
                      setTitle(post.title);
                    }}
                  >
                    edit
                  </button>
                )}
              </div>
            )}

            <p className={s.data}>{post?.date}</p>

            {isTextEdited ? (
              <form
                className={s.editForm}
                onSubmit={() => {
                  if (post) {
                    editPost({ ...post, text });
                    setIsTextEdited(false);
                  }
                }}
              >
                <textarea
                  className={s.editTextarea}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">save changes</button>
                <button onClick={() => setIsTextEdited(false)}>cancel</button>
              </form>
            ) : (
              <div
                onMouseEnter={hoverText}
                onMouseLeave={() => setIsTextHovered(false)}
                className={s.textWrapper}
              >
                <p className={s.text}>{formatText(post?.text)}</p>

                {isTextHovered && post && (
                  <button
                    className={s.editButton}
                    onClick={() => {
                      setIsTextEdited(true);
                      setIsTitleEdited(false);
                      setText(post.text);
                    }}
                  >
                    edit
                  </button>
                )}
              </div>
            )}

            {commentsLoading && <span>comments loading...</span>}
            {commentsError && <p>{commentsError}</p>}

            <CommentsList comments={comments} />
            <CommentsForm onSubmit={addComment} />
          </>
        )}
      </section>
    </div>
  );
};

export default PostPage;
