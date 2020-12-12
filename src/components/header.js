import React from 'react';
export default function Heading() {
  return (
    <div>
      <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
        <div className="container d-flex">
          <div className="contact-info mr-auto">
            <i className="icofont-envelope" /> <a href="mailto:contact@example.com">happybooking@gmail.com</a>
            <i className="icofont-phone" /> +233 566 899
      </div>
          <div className="social-links">
            <a href="#" className="twitter"><i className="icofont-twitter" /></a>
            <a href="#" className="facebook"><i className="icofont-facebook" /></a>
            <a href="#" className="instagram"><i className="icofont-instagram" /></a>
            <a href="#" className="skype"><i className="icofont-skype" /></a>
            <a href="#" className="linkedin"><i className="icofont-linkedin" /></a>
          </div>
        </div>
      </div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto"><a href="index.html">Happy Booking!<span>!</span></a></h1>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active"><a href="index.html">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li className="drop-down"><a href>Drop Down</a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="drop-down"><a href="#">Deep Drop Down</a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>



    </div>
  )
}