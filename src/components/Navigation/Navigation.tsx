import { NavLink } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaPencilAlt, FaEnvelope } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { RiCodeSSlashLine } from "react-icons/ri";
import { VscFilePdf } from "react-icons/vsc";
import s from "./Navigation.module.css";
import {
  CV_URL,
  GITHAB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from "../../constants";

const Navigation = () => {
  return (
    <div className={s.navigation}>
      <ul className={s.navigationList}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeNavLink : s.navLink
            }
            to="/profile"
          >
            <GoPerson className={s.icon} size={25} />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeNavLink : s.navLink
            }
            to="/projects"
          >
            <RiCodeSSlashLine className={s.icon} size={25} />
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeNavLink : s.navLink
            }
            to="/blog"
          >
            <FaPencilAlt className={s.icon} size={25} />
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeNavLink : s.navLink
            }
            to="/contact"
          >
            <FaEnvelope className={s.icon} size={25} />
            Contact me
          </NavLink>
        </li>
      </ul>

      <div className={s.contactsWrapper}>
        <a
          className={s.linkedin}
          href={LINKEDIN_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={35} />
        </a>
        <a
          className={s.github}
          href={GITHAB_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare size={40} />
        </a>
        <a className={s.resume} href={CV_URL} target="_blank" rel="noreferrer">
          <VscFilePdf size={40} />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
