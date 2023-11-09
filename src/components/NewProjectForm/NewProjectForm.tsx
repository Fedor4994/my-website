import { useState } from "react";
import s from "./NewProjectForm.module.css";

type NewProjectProps = {
  onSubmit: (post: any) => void;
};
const NewProjectForm = ({ onSubmit }: NewProjectProps) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [source_link, setSourceLink] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");

  const uploadFile = (e: any) => {
    const files = e.target.files;
    setSelectedFile(files[0]);
  };

  const addProject = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (!selectedFile) {
      alert("Please attach an image");
      return;
    }

    const transformedTechnologies = `[${technologies
      .split(", ")
      .map((tech) => `"${tech}"`)
      .join(", ")}]`;
    console.log({ technologies });
    console.log({ transformedTechnologies });

    formData.append("poster", selectedFile);
    formData.append("title", title);
    formData.append("link", link);
    formData.append("source_link", source_link);
    formData.append("description", description);
    formData.append("technologies", transformedTechnologies);

    onSubmit(formData);
    console.log({ formData });
  };

  return (
    <form className={s.form} onSubmit={addProject}>
      <p className={s.prof}>WANT TO ADD A NEW PROJECT???</p>

      <input
        className={s.input}
        type="text"
        name="title"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        className={s.input}
        name="description"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <input
        className={s.input}
        type="text"
        name="source_link"
        placeholder="source code link"
        onChange={(e) => setSourceLink(e.target.value)}
        value={source_link}
      />
      <input
        className={s.input}
        type="text"
        name="link"
        placeholder="link(live page)"
        onChange={(e) => setLink(e.target.value)}
        value={link}
      />
      <input
        className={s.input}
        type="text"
        name="technologies"
        placeholder="technologies(one, two, three)"
        onChange={(e) => setTechnologies(e.target.value)}
        value={technologies}
      />
      <input className={s.fileInput} type="file" onChange={uploadFile} />

      <button className={s.button}>submit</button>
    </form>
  );
};

export default NewProjectForm;
