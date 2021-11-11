import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerBackground p-5">
        <div className="container">
          <div className="row">
            <div className="container col-md-3 col-lg-3 col-sm-12">
              <div>
                <img
                  style={{ width: "100px" }}
                  src="https://i.ibb.co/VYPdzSs/footer-logo.png"
                  alt=""
                />
              </div>
              <p className="text-start  ">
                Give your eyes a break with anti-blue light glasses. Reading
                glasses with blue light protection is useful for people who want
                to preserve their vision. Due to the intense strain of working
                at the computer, your eyes get tired very quickly, our anti-blue
                glasses help protect your eyes from the harmful effects of the
                blue light.
              </p>
            </div>
            <div className="col-md-3 col-lg-3 text-start col-sm-12 footerContact">
              <h5 className="footerAlert mt-3 mb-4 shadow">Contact use</h5>
              <small>Smart Eye </small> <br />
              <small>Email: info@us.smarteye.com</small> <br />
              <small>Address: 77/2 street(12th Floor), </small> <br />
              <small>99 New Streat Road, Newyork C/A, us -1212.</small> <br />
              <small>Phone: 09610500599 </small> <br />
              <small> Phone: 02 9858538 </small> <br />
              <small>Phone: 9614500599</small> <br />
            </div>
            <div className="col-md-3 col-lg-3 text-start col-sm-12 footerContact">
              <h5 className="footerAlert mt-3 mb-4 shadow">Company</h5>
              <Link to="/">About us</Link> <br />
              <Link to="/shop">Prodcuts</Link> <br />
              <Link to="/">Terms & conditions</Link> <br />
              <Link to="/">FAQ</Link> <br />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 text-start">
              <div className="row">
                <h5 className="footerAlert mt-3 mb-4 shadow">Follow us on</h5>
                <div className="col-md-7 col-lg-7 col-12">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        style={{ width: "45px" }}
                        src="https://milvikbd.com/_next/image?url=%2Ffb.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        style={{ width: "45px" }}
                        src="https://milvikbd.com/_next/image?url=%2Flinkedin.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3 ">
                      <img
                        style={{ width: "45px" }}
                        src="https://milvikbd.com/_next/image?url=%2Ftwitter.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        style={{ width: "45px" }}
                        src="https://milvikbd.com/_next/image?url=%2Finsta.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5 col-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrigtText p-3 text-white">
        &copy; All copyright Terms & conditions are reserved by Smart Eye
        Glasses
      </div>
    </>
  );
};

export default Footer;
