import { HiDownload } from "react-icons/hi";
import styles from "./Contact.module.css";

const Contact = () => {

    return (
        <>
            <section id="contact" className='is-flex is-flex-direction-column is-align-items-center pt-5'>
                <h1 className="is-size-3">CONTACT ME</h1>
                
                <p className="my-5">Please feel free to reach out at any time to learn more. I look forward to hearing from you.</p>

                <div className='is-grid contact-grid my-6 has-border-bottom'>
                    
                    <div className='container is-flex is-flex-direction-column is-align-items-center'>
                        <span className="icon is-medium">
                            <i id="contact-phone-icon" className="fas fa-phone-volume" />
                        </span>
                        <h3>Phone</h3>
                        <p className='tagline'>
                            I can be reached by phone from 9am-9pm CST Monday-Friday
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
                </div>
            </section>

            <section id="hire" className='is-flex is-flex-direction-column is-align-items-center'>
                <h1 className="is-size-3">HIRE ME</h1>
                <div className='is-flex is-justify-content-center'>
                    <button className={styles.downloadButton}>
                        <a 
                            href="/jacob-lindsey-resume.pdf" 
                            download 
                            alt="Download resume pdf"
                        >
                            <HiDownload />
                            Download Resume
                        </a>
                    </button>
                </div>
            </section>
        </>
    )
};

export default Contact;