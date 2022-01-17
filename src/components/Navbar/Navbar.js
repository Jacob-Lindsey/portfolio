import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {

    const [expanded, setExpanded] = useState(false);

    return (
        <nav className="navbar is-flex is-align-items-center is-transparent">
            <div className="navbar-brand">
                <a href="/" className="navbar-item">
                    <span className={styles.logo}>
                        <span>J<span className={styles.mirroredLetter}>J</span></span>
                        <div className="has-text-light is-size-7-mobile is-size-6 is-hidden-mobile">JACOB LINDSEY</div>
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
                <ul className="navbar-end">
                    <li className="navbar-item has-text-light">HOME</li>
                    <li className="navbar-item has-text-light">ABOUT</li>
                    <li className="navbar-item has-text-light">CONTACT</li>
                    <li className="navbar-item has-text-light">PORTFOLIO</li>
                </ul>
            </div>
        </nav>
    )

};

export default Navbar;