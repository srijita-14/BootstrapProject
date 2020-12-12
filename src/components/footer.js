import React from 'react';
export default function footing() {
  return (
    <div>
      <footer id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>To subscribe give your mail ID</p>
                <form action method="post">
                  <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Find us<span>.</span></h3>
                <p>
                  Bagbazaar Street<br />
            kolkata 711105<br />
            West Bengal<br /><br />
                  <strong>Phone:</strong> +91 9830536224<br />
                  <strong>Email:</strong> srijitabanerjee55@gmail.com<br />
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Passenger Details</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Enquiry Details</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Helpline</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Admin Services</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Cancellation Services</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>Connect with us! We'll be happy to receive your Feedback.</p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <div className="copyright">
            © Copyright <strong><span>Happy Booking!</span></strong>. All Rights Reserved
    </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bizland-bootstrap-business-template/ */}
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>


    </div>
  )
}