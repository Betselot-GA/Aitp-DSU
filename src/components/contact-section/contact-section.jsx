import React from 'react';
const ContactSection = () => {

    return (
      <>
        <section className="section bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-title">Contact Us</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 mb-4 mb-lg-0">
                <form
                  action="https://formsubmit.co/betselotgetnet2227@gmail.com"
                  method="POST"
                >
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="mail"
                    name="mail"
                    placeholder="Your Email"
                    required
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                  <textarea
                    name="message"
                    id="message"
                    className="form-control mb-3"
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    value="send"
                    className="btn btn-primary"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
              <div className="col-lg-5">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit recusandae voluptates doloremque veniam temporibus porro
                  culpa ipsa, nisi soluta minima saepe laboriosam debitis
                  nesciunt. Dolore, labore. Accusamus nulla sed cum aliquid
                  exercitationem debitis error harum porro maxime quo iusto
                  aliquam dicta modi earum fugiat, vel possimus commodi,
                  deleniti et veniam, fuga ipsum praesentium. Odit unde optio
                  nulla ipsum quae obcaecati! Quod esse natus quibusdam
                  asperiores quam vel, tempore itaque architecto ducimus
                  expedita
                </p>
                <a href="tel:+8802057843248" className="text-color h5 d-block">
                  +880 20 5784 3248
                </a>
                <a
                  href="mailto:yourmail@email.com"
                  className="mb-5 text-color h5 d-block"
                >
                  yourmail@email.com
                </a>
                <p>
                  University St, Cleveland, MS 38732
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
    
}
 
export default ContactSection;