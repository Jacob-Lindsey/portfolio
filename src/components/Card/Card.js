const Card = (props) => {

    const screenshotURL = props.screenshotURL;
    const liveURL = props.liveURL;
    const githubURL = props.githubURL;

    return (
        
        <div className="container">
            <div className="card">
                <img src={screenshotURL} className="project-image has-radius-10" alt="" />
                <footer className="card-footer is-justify-content-space-around is-borderless">
                    <span>
                        <a href={liveURL} className="card-footer-item" target="_blank" rel="noreferrer noopener">Live Demo</a>
                    </span>
                    <span>
                        <a href={githubURL} className="card-footer-item" target="_blank" rel="noreferrer noopener">Github</a>
                    </span>
                </footer>
            </div>
            
        </div>

    )

};

export default Card;