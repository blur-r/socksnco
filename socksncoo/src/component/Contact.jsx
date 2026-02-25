function Contact() {
    return (
        <>
            <section className="contact">
                <h1 className="about-title">
                    Get in <span className="yellow">Touch</span>
                </h1>
                <hr className="contact-hr" />
                <p className="contact-text">Have a project in mind or want to discuss potential collaboration? Feel free to reach
                    out!</p>
                <div className="contact-container">
                    <div className="contact-form">
                        <p>Send me a message</p>
                        <form action="">
                            <div className="form-field">
                                <label for="">Your Name</label>
                                <input type="text" name="" id="" placeholder="Gadus Gadus" />
                            </div>
                            <div className="form-field">
                                <label for="">Your Email</label>
                                <input type="text" name="" id="" placeholder="Gadus Gadus" />
                            </div>
                            <div className="form-field">
                                <label for="">Your Message</label>
                                <textarea name="" id="" placeholder="Tell me about your project or make an inquiry"></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="social-info">
                        <div className="email-me">
                            <div className="email-icon">
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                            <div className="email-text">
                                <p>Email Me</p>
                                <p>gadus@gmail.com</p>
                                <p>
                                    Send Message
                                    <i className="fa-solid fa-arrow-right"></i>
                                </p>
                            </div>
                        </div>
                        <div className="social-media-contact">
                            <hr style={{ marginRight: "auto" }} />
                            <div>
                                <div className="socials">
                                    <a href="#">
                                        <i className="fa-brands fa-whatsapp social-icon"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-instagram social-icon"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-square-x-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-linkedin-in social-icon"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-facebook-f social-icon"></i>
                                    </a>
                                </div>
                            </div>
                            <hr style={{ marginLeft: "auto" }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact

