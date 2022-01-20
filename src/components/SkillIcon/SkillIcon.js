import { useState, useEffect } from "react";

const SkillIcon = (props) => {

    const [colored, setColored] = useState(null);

    useEffect(() => {
        window.screen.width <= 768 ? setColored('colored') : setColored(null);
    },[setColored]);

    const detectWindowSize = () => {
        window.innerWidth <= 768 ? setColored('colored') : setColored(null);
    };

    window.onresize = detectWindowSize;

    const iconURL = props.iconURL;
    const iconTitle = props.iconTitle;

    const handleMouseEnter = (e) => {
        setColored('colored');
    };

    const handleMouseLeave = (e) => {
        setColored(null);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={iconURL} className={`icon-transition`} alt={iconTitle} />
            <h3>{iconTitle}</h3>
        </div>
    )

};

export default SkillIcon;