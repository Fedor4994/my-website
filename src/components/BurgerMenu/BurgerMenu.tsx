import { NavLink } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaPencilAlt, FaEnvelope } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { RiCodeSSlashLine } from "react-icons/ri";
import { VscFilePdf } from "react-icons/vsc";
import "./burgermenu.css";
import s from "./BurgerMenu.module.css";
import {
  CV_URL,
  GITHAB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from "../../constants";
import { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (openState: boolean) => {
    setIsOpen(openState);
  };

  return (
    <div id="outer-container">
      <Menu
        isOpen={isOpen}
        onStateChange={(state) => handleStateChange(state.isOpen)}
        right
        width={"100%"}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <div onClick={() => setIsOpen(false)}>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeNavLink : s.navLink
            }
            to="/profile"
          >
            <GoPerson className={s.icon} size={25} />
            Profile
          </NavLink>
        </div>
        <div onClick={() => setIsOpen(false)}>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeNavLink : s.navLink
            }
            to="/projects"
          >
            <RiCodeSSlashLine className={s.icon} size={25} />
            Projects
          </NavLink>
        </div>
        <div onClick={() => setIsOpen(false)}>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeNavLink : s.navLink
            }
            to="/blog"
          >
            <FaPencilAlt className={s.icon} size={25} />
            Blog
          </NavLink>
        </div>
        <div onClick={() => setIsOpen(false)}>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeNavLink : s.navLink
            }
            to="/contact"
          >
            <FaEnvelope className={s.icon} size={25} />
            Contact me
          </NavLink>
        </div>

        <div className={s.contactsWrapper}>
          <a
            className={s.navLink}
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size={45} />
          </a>
          <a
            className={s.navLink}
            href={GITHAB_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare size={50} />
          </a>
          <a
            className={s.navLink}
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
          >
            <VscFilePdf size={50} />
          </a>
        </div>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
