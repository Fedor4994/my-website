import { Link } from "react-router-dom";
import s from "./Home.module.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaPencilAlt } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { RiCodeSSlashLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import { GiLetterBomb } from "react-icons/gi";
import Logo from "../../components/Logo";
import {
  ADMIN_EMAIL,
  CV_URL,
  GITHAB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from "../../constants";
import { useGoogleAuth } from "../../hooks/useGoogleAuth";
import { useGoogleOneTapLogin } from "@react-oauth/google";

const Home = () => {
  const { loginData, login } = useGoogleAuth();

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      login({ token: credentialResponse.credential || "" });
    },
    onError: () => {
      alert("Login Failed");
    },
    disabled: !!loginData,
  });

  return (
    <div className={s.home}>
      <Logo width={250} height={250} big />
      <p className={s.prof}>FULL STACK WEB DEVELOPER</p>
      {loginData?.email === ADMIN_EMAIL && (
        <p className={s.prof}>ADMIN NA BAZE</p>
      )}
      <div className={s.socialLinks}>
        <a
          className={s.socialLink}
          href={LINKEDIN_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={40} />
        </a>
        <a
          className={s.socialLink}
          href={GITHAB_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare size={45} />
        </a>
      </div>
      <ul className={s.navigationLinks}>
        <li className={s.linkWrapper}>
          <div className={s.blackBorder}>
            <Link className={s.navLink} to={"/profile"}>
              <GoPerson size={60} />
            </Link>
          </div>
          <p className={s.linkText}>Profile</p>
        </li>

        <li className={s.linkWrapper}>
          <div className={s.blackBorder}>
            <Link className={s.navLink} to={"/projects"}>
              <RiCodeSSlashLine size={60} />
            </Link>
          </div>
          <p className={s.linkText}>Projects</p>
        </li>

        <li className={s.linkWrapper}>
          <div className={s.blackBorder}>
            <Link className={s.navLink} to={"/blog"}>
              <FaPencilAlt size={50} />
            </Link>
          </div>
          <p className={s.linkText}>Blog</p>
        </li>

        <li className={s.linkWrapper}>
          <div className={s.blackBorder}>
            <a
              className={s.navLink}
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
            >
              <CgFileDocument size={60} />
            </a>
          </div>
          <p className={s.linkText}>Resume</p>
        </li>

        <li className={s.linkWrapper}>
          <div className={s.blackBorder}>
            <Link className={s.navLink} to={"/contact"}>
              <GiLetterBomb size={70} />
            </Link>
          </div>
          <p className={s.linkText}>Contact me</p>
        </li>
      </ul>
    </div>
  );
};

export default Home;
