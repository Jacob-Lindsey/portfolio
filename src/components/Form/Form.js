import styles from "./Form.module.css";

const Form = () => {

    return (
        <div id="contact-form" className="container is-max-desktop">
            <div className="field">
                <div className="control">
                    <input className="input" type="email" placeholder="Email Address" />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <textarea className="textarea" placeholder="Leave me a message" />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </div>
    )

};

export default Form;