import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import styles from "./Home.module.css";

const Home = () => {

    const [animationDone, setAnimationDone] = useState(false);

    const lineRef = useRef(null);
    const typed = useRef(null);

    useEffect(() => {

        if (localStorage.getItem("hasVisited")) {
            setAnimationDone(true);
            return;
        } else {
            const options = {
                strings: ['My name is Jacob Lindsey', 'Front-end web developer', 'Please take a look around.'],
                typeSpeed: 50,
                backSpeed: 15,
                startDelay: 1000,
                onComplete: function(self) {
                    setTimeout(() => {
                        lineRef.current.classList.add("typed");
                        document.querySelector(".typed-cursor").classList.add("typed");
                        document.querySelector(".typed-cursor").classList.remove("typed-cursor--blink");
                        setTimeout(() => {
                            setAnimationDone(true);
                        }, 1500);
                    }, 1000);
                    return () => {
                        typed.current.destroy();
                    }
                }
            };
            typed.current = new Typed(lineRef.current, options);
            localStorage.setItem("hasVisited", "true");
        }
    }, []);

    return (
        <div className="wrap">
            <div className="type-wrap">
                <span className="is-size-3-desktop is-size-4-mobile" ref={lineRef} />
            </div>
            {animationDone ?
                <section className={styles.homeWrapper}>HOME PAGE</section>
                :
                null
            }
            
        </div>
    )
};

export default Home;