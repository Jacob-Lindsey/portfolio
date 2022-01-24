import SkillIcon from "../SkillIcon/SkillIcon";

const Skills = () => {    

    return (
        <section id="bio" className="is-max-desktop">
            <h1 className="is-size-2-mobile is-size-3-desktop">SKILLS</h1>
            <div className="container">
                <div id="bio-icons" className="is-grid">
                    <SkillIcon 
                        iconURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        iconTitle="HTML"
                    />
                    <SkillIcon 
                        iconURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        iconTitle="CSS"
                    />
                    <SkillIcon 
                        iconURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        iconTitle="Javascript"
                    />
                    <SkillIcon 
                        iconURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        iconTitle="React"
                    />
                    <SkillIcon 
                        iconURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        iconTitle="Node"
                    />
                    <SkillIcon 
                        iconURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                        iconTitle="Express"
                    />
                    <SkillIcon 
                        iconURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        iconTitle="Python"
                    />
                    <SkillIcon 
                        iconURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                        iconTitle="MongoDB"
                    />
                    <SkillIcon 
                        iconURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        iconTitle="Git"
                    />
                    <SkillIcon 
                        iconURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                        iconTitle="Linux"
                    />
                    <SkillIcon 
                        iconURL="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                        iconTitle="Photoshop"
                    />
                </div>
            </div>
        </section>
    )

};

export default Skills;