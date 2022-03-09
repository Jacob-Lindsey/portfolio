import useStickyState from "../../utils/useStickyState";

const SkillIcon = (props) => {
    
    const [theme] = useStickyState('dark', 'theme');

    const iconURL = props.iconURL;
    const iconTitle = props.iconTitle;
    let isInvert;

    if (iconTitle === "Express") {
        isInvert = theme === "dark" ? true : false;
    }

    return (
        <div>
            <img src={iconURL} className={`icon-transition ${isInvert ? 'express' : ''}`} alt={iconTitle} />
            <h3>{iconTitle}</h3>
        </div>
    )
};

export default SkillIcon;