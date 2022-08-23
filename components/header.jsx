import { useState } from "react";
import { FaMap, FaNewspaper, FaHistory, FaHome } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { FiGrid } from "react-icons/fi";
import DarkMode from "./darkmode";
function Header() {
  const [active, setActive] = useState(false);
  const ShowMenu = () => {
    document
      .getElementById("nav-menu")
      .classList.add(active ? "" : "show-menu");
    setActive((a) => !a);
  };
  function CloseMenu() {
    document.getElementById("nav-menu").classList.remove("show-menu");
    setActive((a) => !a);
  }

  return (
    <section className="header">
      <header className="header" id="header">
        <nav className="container nav">
          <div className="nav__menu" id="nav-menu">
            <ul className="grid nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="nav__icon">
                    <FaHome />
                  </i>{" "}
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#clients" className="nav__link">
                  <i className="nav__icon">
                    <FaNewspaper />
                  </i>{" "}
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#faq" className="nav__link">
                  <i className="nav__icon">
                    <FaHistory />
                  </i>{" "}
                  Faq
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="nav__icon">
                    <FaMap />
                  </i>{" "}
                  Contact
                </a>
              </li>
            </ul>
            <i className="nav__close" id="nav-close" onClick={CloseMenu}>
              <GrFormClose />
            </i>
          </div>
          <div className="nav__btns">
            <div className="nav__toggle" onClick={ShowMenu} id="nav-toggle">
              <i className="nav__icon">
                <FiGrid />
              </i>
            </div>

            <DarkMode />
          </div>
        </nav>
      </header>
    </section>
  );
}

export default Header;
