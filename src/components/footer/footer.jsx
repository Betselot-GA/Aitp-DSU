import React from 'react';
import Logo from "../../images/logo.png"

const Footer = () =>{
    return (
      <>
        <footer>
          <div className="newsletter">
            <div className="container">
              <div className="row">
                <div className="col-md-9 ml-auto bg-primary py-5 newsletter-block">
                  <h3 className="text-white">Subscribe Now</h3>
                  <form action="#">
                    <div className="input-wrapper">
                      <input
                        type="email"
                        className="form-control border-0"
                        id="newsletter"
                        name="newsletter"
                        placeholder="Enter Your Email..."
                      />
                      <button
                        type="submit"
                        value="send"
                        className="btn btn-primary"
                      >
                        Join
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="footer bg-footer section border-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-8 mb-5 mb-lg-0">
                  <a className="logo-footer" href="index.html">
                    <img
                      className="img-fluid"
                      src={Logo}
                      height="50"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-md-2 col-2 mb-5 mb-md-0"></div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                  <h4 className="text-white mb-5">COMPANY</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <a className="text-color" href="/about">
                        About Us
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-color" href="/events">
                        Events
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-color" href="/notice">
                        Notice
                      </a>
                    </li>
                    <li className="mb-3">
                      <a className="text-color" href="/contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-3 col-3 mb-6 mb-md-0"></div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                  <h4 className="text-white mb-5">RECOMMEND</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">University St, Cleveland, MS 38732</li>
                    <li className="mb-2">+1 (2) 345 6789</li>
                    <li className="mb-2">+1 (2) 345 6789</li>
                    <li className="mb-2">contact@yourdomain.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright py-4 bg-footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-7 text-sm-left text-center">
                  <p className="mb-0">
                    Copyright &copy;
                    {new Date().getFullYear()} developed by{" "}
                    <a
                      href="https://github.com/Betselot-GA"
                      className="text-muted"
                    >
                      Betselot Getnet Semaw
                    </a>
                  </p>
                </div>
                <div className="col-sm-5 text-sm-right text-center">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="d-inline-block p-2" href="">
                        <i className="ti-facebook text-primary"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="d-inline-block p-2" href="">
                        <i className="ti-twitter-alt text-primary"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="d-inline-block p-2" href="">
                        <i className="ti-github text-primary"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="d-inline-block p-2" href="">
                        <i className="ti-instagram text-primary"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}
 
export default Footer;


