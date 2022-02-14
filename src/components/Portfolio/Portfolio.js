import Card from "../Card/Card";

const Portfolio = () => {

    return (
        <section id="portfolio" className="is-max-desktop">
            <h1 className="is-size-2-mobile is-size-3-desktop">PROJECTS</h1>
            <div className="container">
                <div className="is-grid project-grid">
                    <div className="grid-item">
                        <h1 className="card-title">Invoice App</h1>
                        <Card
                            title="Invoice App"
                            screenshotURL="/invoice-1.png"
                            liveURL="https://n-voice.netlify.app/"
                            githubURL="https://github.com/Jacob-Lindsey/invoice-app"
                        />
                    </div>
                    <div className="grid-item">
                        <h1 className="card-title">Craps Game</h1>
                        <Card
                            title="Craps Game"
                            screenshotURL="/craps-screen.png"
                            liveURL="https://craps--game.herokuapp.com/"
                            githubURL="https://github.com/Jacob-Lindsey/craps-game-client"
                        />
                    </div>
                    <div className="grid-item">
                        <h1 className="card-title">Personal Blog</h1>
                        <Card
                            title="Personal Blog"
                            screenshotURL="/blog-5.png"
                            liveURL="https://damp-reef-82599.herokuapp.com/"
                            githubURL="https://github.com/Jacob-Lindsey/personal-blog"
                        />
                    </div>
                    <div className="grid-item">
                        <h1 className="card-title">Codebreaker Game</h1>
                        <Card
                            title="Codebreaker Game"
                            screenshotURL="/codebreaker-screen.png"
                            liveURL="https://unlock-me.netlify.app/"
                            githubURL="https://github.com/Jacob-Lindsey/unlock-it"
                        />
                    </div>
                    <div className="grid-item">
                        <h1 className="card-title">Formula-1 Race Results</h1>
                        <Card
                            title="Formula-1 Race Results"
                            screenshotURL="/stat-screen.png"
                            liveURL="https://raceresults.netlify.app/"
                            githubURL="https://github.com/Jacob-Lindsey/stat-tracker"
                        />
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Portfolio;