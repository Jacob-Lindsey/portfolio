import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {

    const [expanded, setExpanded] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        let theme = darkMode ? "light" : "dark";
        document.documentElement.classList.add('theme-transition');
        document.documentElement.setAttribute("data-theme", theme);
        window.setTimeout(function() {
            document.documentElement.classList.remove('theme-transition')
        }, 1000);
    };

    return (
        <nav className="navbar is-flex is-align-items-center is-transparent">
            <div className="navbar-brand">
                <a href="/" className="navbar-item">
                    <span className={styles.logo}>
                        <span>J<span className={styles.mirroredLetter}>J</span></span>
                        <div className="is-size-7-mobile is-size-6 is-hidden-mobile">JACOB LINDSEY</div>
                    </span>
                </a>
            </div>
            <button
                type="button"
                id={styles.navbarToggle}
                aria-controls={styles.navbarMenu}
                aria-label="Toggle menu"
                aria-expanded={expanded}
                onClick={() => setExpanded(!expanded)}
            >
                <span className={styles.iconBar}></span>
                <span className={styles.iconBar}></span>
                <span className={styles.iconBar}></span>
            </button>
            <div id={styles.navbarMenu} className="navbar-menu" aria-labelledby={styles.navbarToggle}>
                <ul className="navbar-end is-flex">
                    <li className="navbar-item">
                        <div className="field is-flex">
                            <input id="switchRoundedInfo" type="checkbox" name="light-dark-toggle" className="switch is-rounded is-info" onChange={toggleDarkMode} checked={!!darkMode} />
                            <label htmlFor="switchRoundedInfo">
                                D
                            </label>
                            <span className="mr-2">L</span>
                        </div>
                    </li>
                    <li className="navbar-item">HOME</li>
                    <li className="navbar-item">ABOUT</li>
                    <li className="navbar-item">CONTACT</li>
                    <li className="navbar-item">PORTFOLIO</li>
                </ul>
            </div>
        </nav>
    )

};

export default Navbar;