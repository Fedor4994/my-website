import {
  ADMIN_EMAIL,
  CV_URL,
  LINKEDIN_PROFILE_URL,
  TELEGRAM_URL,
} from "../../constants";
import s from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section className={s.contacts}>
      <p className={s.title}>Contact Me</p>
      <p className={s.about}>
        The quickest way to contact me would be through&nbsp;
        <a
          className={s.link}
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
        >
          Telegram.&nbsp;
        </a>
        <br /> <br /> I can also be reached by email:&nbsp;
        <a
          className={s.link}
          href={`mailto:${ADMIN_EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          fedorsosnin04@gmail.com
        </a>
        <a
          className={s.link}
          href={LINKEDIN_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
        >
          , Linkedin
        </a>
        , and other&nbsp;
        <a className={s.link} href={CV_URL} target="_blank" rel="noreferrer">
          resume&nbsp;
        </a>
        contact information.
      </p>
    </section>
  );
};

export default Contacts;
