import { useState } from "react";
import s from "./NewPostForm.module.css";
import { PostData } from "../../types/Post";

type NewPostProps = {
  onSubmit: (post: PostData) => void;
};
const NewPostForm = ({ onSubmit }: NewPostProps) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const addPost = (e: any) => {
    e.preventDefault();
    onSubmit({ title, text, date });
    setTitle("");
    setText("");
    setDate("");
  };

  return (
    <div>
      <form className={s.form} onSubmit={addPost}>
        <p className={s.prof}>WANT TO ADD A NEW POST???</p>

        <input
          type="text"
          className={s.input}
          placeholder="enter the title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className={s.textarea}
          placeholder="enter the text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input
          type="text"
          className={s.input}
          placeholder="enter the date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />

        <button className={s.button} type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
