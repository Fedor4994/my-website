import { RotatingLines } from "react-loader-spinner";
import PostLink from "../../components/Post/PostLink";
import { usePosts } from "../../hooks/usePosts";
import s from "./Blog.module.css";
import { ADMIN_EMAIL } from "../../constants";
import NewPostForm from "../../components/NewPostForm/NewPostForm";

const Blog = () => {
  const {
    data: { posts },
    error,
    loading,
    addPost,
  } = usePosts();

  return (
    <section className={s.blog}>
      <p className={s.title}>Posts: </p>
      {JSON.parse(localStorage.getItem("login-data") || "{}")?.email ===
        ADMIN_EMAIL && <NewPostForm onSubmit={addPost} />}
      {loading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}{" "}
      {error && <p>{error}</p>}
      <ul className={s.blogList}>
        {!error &&
          [...posts]
            .reverse()
            .map((post) => <PostLink key={post._id} {...post} />)}
      </ul>
    </section>
  );
};

export default Blog;
