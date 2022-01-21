import { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "./Home.module.css";

const Home = () => {

    const lineRef = useRef(null);
    const typed = useRef(null);


    useEffect(() => {
        const options = {
            strings: ['My name is Jacob Lindsey', 'Front-end web developer', 'Please take a look around.'],
            typeSpeed: 50,
            backSpeed: 15,
            startDelay: 1000,
        };

        typed.current = new Typed(lineRef.current, options);

        return () => {
            typed.current.destroy();
        }
    }, []);

    
    
    
    return (
        <div className="wrap">
            <div className="type-wrap">
                <span className="is-size-5-desktop is-size-4-mobile" ref={lineRef} />
            </div>
        </div>
    )

};

export default Home;