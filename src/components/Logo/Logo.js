import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./Logo.module.css";

const Logo = () => {

    const logoLeftRef = useRef(null);
    const logoRightRef = useRef(null);
    const logoInnerRef = useRef(null);

    useEffect(() => {
        logoLeftRef.current = anime({
            targets: "#logo-left",
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeInSine',
            delay: 250,
        });
        logoRightRef.current = anime({
            targets: "#logo-right",
            translateX: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeInSine',
            delay: 250,
        });
        logoInnerRef.current = anime({
            targets: "#logo span",
            scale: [1.7, 1],
            opacity: [0, 1],
            duration: 900,
            easing: 'easeInSine',
            delay: 250,
        });
    },[]);

    return (

        <span id="logo" className={styles.logo}>
            <div id="logo-left" className="is-size-7 has-text-weight-light is-hidden-mobile">JACOB</div>
            <span>J<span className={styles.mirroredLetter}>J</span></span>
            <div id="logo-right" className="is-size-7 has-text-weight-light is-hidden-mobile">LINDSEY</div>
        </span>

    )

};

export default Logo;