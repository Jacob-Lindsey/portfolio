import styles from "./Form.module.css";

const Form = () => {

    return (
        <section className="container is-max-desktop">
            <div className="field">
                <label className="label has-text-left has-text-light has-text-weight-light">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email Address" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope" />
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label has-text-left has-text-light has-text-weight-light">Message</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Leave me a message" />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </section>
    )

};

export default Form;