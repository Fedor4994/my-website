import s from "./Tooling.module.css";
import {
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaSass, FaGitAlt } from "react-icons/fa";
const Tooling = () => {
  return (
    <div className={s.tooling}>
      <h3 className={s.skills}>SKILLS:</h3>
      <ul className={s.toolsList}>
        <li className={s.tool}>
          <SiJavascript color="#00c6ed" size={40} />
          JavaScript
        </li>
        <li className={s.tool}>
          <SiTypescript color="#00c6ed" size={40} />
          TypeScript
        </li>
        <li className={s.tool}>
          <RiReactjsLine color="#00c6ed" size={45} />
          React
        </li>
        <li className={s.tool}>
          <SiRedux color="#00c6ed" size={40} />
          Redux
        </li>
        <li className={s.tool}>
          <SiHtml5 color="#00c6ed" size={40} />
          HTML5
        </li>
        <li className={s.tool}>
          <SiCss3 color="#00c6ed" size={40} />
          CSS3
        </li>
        <li className={s.tool}>
          <FaSass color="#00c6ed" size={45} />
          SASS
        </li>
        <li className={s.tool}>
          <SiNodedotjs color="#00c6ed" size={40} />
          Node.js
        </li>
        <li className={s.tool}>
          <SiExpress color="#00c6ed" size={40} />
          Express
        </li>
        <li className={s.tool}>
          <SiMongodb color="#00c6ed" size={40} />
          MongoDB
        </li>
        <li className={s.tool}>
          <FaGitAlt color="#00c6ed" size={45} />
          Git
        </li>
        <li className={s.tool}>
          <SiGithub color="#00c6ed" size={40} />
          GitHub
        </li>
      </ul>
    </div>
  );
};

export default Tooling;
