export default function ContactUs() {
    return (
        <>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981046053!2d105.74459305094251!3d21.038127785924527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2sFPT%20Polytechnic%20Hanoi!5e0!3m2!1sen!2s!4v1628051034913!5m2!1sen!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
            </div>
            <section className="contact spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__text">
                                <div className="section-title">
                                    <span>Information</span>
                                    <h2>Contact Us</h2>
                                    <p>As you might expect of a company that began as a high-end interiors contractor, we pay
                                        strict attention.</p>
                                </div>
                                <ul>
                                    <li>
                                        <h4>America</h4>
                                        <p>195 E Parker Square Dr, Parker, CO 801 <br />+43 982-314-0958</p>
                                    </li>
                                    <li>
                                        <h4>France</h4>
                                        <p>109 Avenue Léon, 63 Clermont-Ferrand <br />+12 345-423-9893</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea placeholder="Message" defaultValue={""} />
                                            <button type="submit" className="site-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}