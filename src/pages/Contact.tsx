import { Button, Col, Row, Form } from "react-bootstrap";

function Contact() {
    return (
        <div id="contact" className="container p-5 block contact">
            <div className="section-title py-5">
                <h2>Contact</h2>

                <p>
                    Magnam dolores commodi suscipit. Necessitatibus eius
                    consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                    velit. Quisquam quos quisquam cupiditate. Et nemo qui
                    impedit suscipit alias ea. Quia fugiat sit in iste officiis
                    commodi quidem hic quas.
                </p>
            </div>
            <div className="row">
                <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                        <div className="address">
                            {" "}
                            <i className="fa fa-location-dot"></i>
                            <h4>Location:</h4>
                            <p>Clear Lake, Houston, TX 77058, United States</p>
                        </div>
                        <div className="email">
                            {" "}
                            <i className="fa fa-envelope"></i>
                            <h4>Email:</h4>
                            <p>astroworkout@mars.com</p>
                        </div>
                        <div className="phone">
                            {" "}
                            <i className="fa fa-phone"></i>
                            <h4>Call:</h4>
                            <p>+1 1111 11111 11</p>
                        </div>{" "}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.5670865756383!2d-95.09152774939128!3d29.558099181973816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409da671292593%3A0xf684f098a7237a30!2sNASA%20Mission%20Control%20Center!5e0!3m2!1sen!2scz!4v1677900051375!5m2!1sen!2scz"
                            style={{
                                border: "0",
                                width: "100%",
                                height: "290px",
                            }}
                        ></iframe>
                    </div>
                </div>
                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <Form className="email-form">
                        <div className="row">
                            <Form.Group className="form-group col-md-6">
                                {" "}
                                <Form.Label for="name">Name</Form.Label>{" "}
                                <Form.Control
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter full name"
                                />
                            </Form.Group>
                            <Form.Group className="form-group col-md-6">
                                {" "}
                                <Form.Label for="email">Email</Form.Label>{" "}
                                <Form.Control
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                        </div>
                        <Form.Group className="form-group">
                            {" "}
                            <Form.Label for="subject">Subject</Form.Label>{" "}
                            <Form.Control
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Enter subject"
                            />
                        </Form.Group>
                        <Form.Group className="form-group">
                            {" "}
                            <Form.Label for="message">Message</Form.Label>
                            <textarea
                                className="form-control"
                                name="message"
                                placeholder="Enter message"
                                id="message"
                            ></textarea>
                        </Form.Group>

                        <div className="text-center">
                            <Button type="submit" disabled>
                                Send Message
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
