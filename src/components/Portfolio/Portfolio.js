import Card from "../Card/Card";

const Portfolio = () => {

    return (
        <section id="portfolio" className="is-max-desktop">
            <h1 className="is-size-2-mobile is-size-3-desktop">PROJECTS</h1>
            <div className="container">
                <div className="is-grid project-grid">
                    <Card
                        screenshotURL="/invoice-1.png"
                        liveURL="https://n-voice.netlify.app/"
                        githubURL="https://github.com/Jacob-Lindsey/invoice-app"
                    />
                    <Card
                        screenshotURL="/craps-screen.png"
                        liveURL="https://craps--game.herokuapp.com/"
                        githubURL="https://github.com/Jacob-Lindsey/craps-game-client"
                    />
                    <Card
                        screenshotURL="/blog-5.png"
                        liveURL="https://damp-reef-82599.herokuapp.com/"
                        githubURL="https://github.com/Jacob-Lindsey/personal-blog"
                    />
                </div>
            </div>
        </section>
    )

};

export default Portfolio;