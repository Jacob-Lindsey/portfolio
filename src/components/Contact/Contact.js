import Form from '../Form/Form';

const Contact = () => {

    return (

        <section id="contact" className='is-flex is-flex-direction-column is-align-items-center pt-5'>
            <h1 className="is-size-3">CONTACT ME</h1>
            
            <div className='is-grid contact-grid'>
                
                <div className='container is-flex is-flex-direction-column is-align-items-center'>
                    <span className="icon is-medium">
                        <i id="contact-phone-icon" className="fas fa-phone-volume" />
                    </span>
                    <h3>Phone</h3>
                    <p className='tagline'>
                        I can be reached by phone from 8am-8pm EST Monday thru Friday
                    </p>
                    <a href='tel:314-960-2551' className='contact-info-link'>314-960-2551</a>
                </div>
            
                <div className='container is-flex is-flex-direction-column is-align-items-center'>
                    <span className="icon is-medium">
                        <i id="contact-email-icon" className="fas fa-envelope" />
                    </span>
                    <h3>Email</h3>
                    <p className='tagline'>
                        I can be reached by email anytime
                    </p>
                    <a href='mailto:jacob.lindsey88@gmail.com' className='contact-info-link'>jacob.lindsey88@gmail.com</a>
                </div>

                <p className='tagline'>
                    Or simply leave me a message below!
                </p>
            </div>
            <Form />
        </section>

    )

};

export default Contact;