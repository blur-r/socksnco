function Contact() {
    return (
        <>
            <section className="contact">
                <h1 className="about-title">
                    got questions?
                </h1>
                <hr className="contact-hr" />
                <p className="contact-text">got a question about some products or you need to make an enquiry, feel free to reach
                    out!</p>
                <div className="contact-container">
                    <div className="contact-form">
                        <p>send me a message</p>
                        <form action="">
                            <div className="form-field">
                                <label for="">name</label>
                                <input type="text" name="" id="" placeholder="gadus gadus" />
                            </div>
                            <div className="form-field">
                                <label for="">email / phone no</label>
                                <input type="text" name="" id="" placeholder="gadus@gmail.com or 08123456789" />
                            </div>
                            <div className="form-field">
                                <label for="">message</label>
                                <textarea name="" id="" placeholder="ask your question or make an inquiry"></textarea>
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
                                <p>email me @</p>
                                <a href="mailto:hello@example.com?subject=Project%20Inquiry&body=Hi%20there%2C%20I%20want%20to%20ask%20about...">
                                    gadus@gmail.com
                                </a>
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

