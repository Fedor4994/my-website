import { Link, Outlet } from "react-router-dom";

import s from "./Layout.module.css";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation/Navigation";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

const Layout = () => {
  let width = window.innerWidth;
  return (
    <>
      <header className={s.header}>
        <Link to="/">
          <Logo width={200} height={35} big={false} />
        </Link>
        {width > 1023 && <Navigation />}
      </header>
      {width < 1024 && <BurgerMenu />}

      <main id="page-wrap">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
