import Card from "../Card/Card";

const Portfolio = () => {

    return (
        <section id="portfolio" className="is-max-desktop">
            <h1 className="is-size-2-mobile is-size-3-desktop">PORTFOLIO</h1>
            <div className="container">
                <div className="is-grid project-grid">
                    <Card
                        screenshotURL="/craps-screen.png"
                        liveURL="/"
                        githubURL="https://github.com/Jacob-Lindsey/craps-game-client"
                    />
                    <Card
                        screenshotURL="/craps-screen.png"
                        liveURL="/"
                        githubURL="https://github.com/Jacob-Lindsey/craps-game-client"
                    />
                    <Card
                        screenshotURL="/craps-screen.png"
                        liveURL="/"
                        githubURL="https://github.com/Jacob-Lindsey/craps-game-client"
                    />
                    <Card
                        screenshotURL="/craps-screen.png"
                        liveURL="/"
                        githubURL="https://github.com/Jacob-Lindsey/craps-game-client"
                    />
                    <Card
                        screenshotURL="/craps-screen.png"
                        liveURL="/"
                        githubURL="https://github.com/Jacob-Lindsey/craps-game-client"
                    />
                </div>
            </div>
        </section>
    )

};

export default Portfolio;