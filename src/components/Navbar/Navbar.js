import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {

    const [expanded, setExpanded] = useState(false);

    return (
        <nav className={styles.container}>
            <a href="/" className={styles.homeLink}>
                <span className={styles.logo}>LOGO</span>
            </a>
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
            <div id={styles.navbarMenu} aria-labelledby={styles.navbarToggle}>
                <ul className={styles.wrapper}>
                    <li className={styles.link}>HOME</li>
                    <li className={styles.link}>ABOUT</li>
                    <li className={styles.link}>CONTACT</li>
                    <li className={styles.link}>PORTFOLIO</li>
                </ul>
            </div>
        </nav>
    )

};

export default Navbar;