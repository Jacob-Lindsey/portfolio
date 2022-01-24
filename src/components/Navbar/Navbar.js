import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useStickyState from "../../utils/useStickyState";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

const Navbar = () => {

    const [expanded, setExpanded] = useState(false);
    const [theme, setTheme] = useStickyState('dark', 'theme');

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    });

    const toggleDarkMode = () => {
        let preferredTheme = theme === "dark" ? "light" : "dark";
        setTheme(preferredTheme);
        document.documentElement.classList.add('theme-transition');
        document.documentElement.setAttribute("data-theme", preferredTheme);
        window.setTimeout(function() {
            document.documentElement.classList.remove('theme-transition')
        }, 1000);
    };

    return (
        <nav className="navbar is-flex is-align-items-center is-transparent">
            <div className="navbar-brand">
                <a href="/" id="logo-container" className="navbar-item">
                    <Logo />
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
            <div id={styles.navbarMenu} className="navbar-menu is-justify-content-center" aria-labelledby={styles.navbarToggle}>
                <ul className="navbar-end is-flex">
                    <li className="navbar-item">
                        <div className="field is-flex is-justify-content-center">
                            <input id="switchRoundedInfo" type="checkbox" name="light-dark-toggle" className="switch is-rounded is-info" onChange={toggleDarkMode} checked={theme === "dark" ? true : false} />
                            <label htmlFor="switchRoundedInfo"></label>
                        </div>
                    </li>
                    <li className="navbar-item is-clickable" onClick={() => setExpanded(false)}><Link to="/">HOME</Link></li>
                    <li className="navbar-item is-clickable" onClick={() => setExpanded(false)}><Link to="skills">SKILLS</Link></li>
                    <li className="navbar-item is-clickable" onClick={() => setExpanded(false)}><Link to="contact">CONTACT</Link></li>
                    <li className="navbar-item is-clickable" onClick={() => setExpanded(false)}><Link to="portfolio">PROJECTS</Link></li>
                </ul>
            </div>
        </nav>
    )

};

export default Navbar;