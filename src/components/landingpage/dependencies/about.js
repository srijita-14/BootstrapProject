import React from 'react';
export const About = (props) => {
  return (
    <div>
      <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <h3>Find Out More <span>About Us</span></h3>
            <p>{props.content.Introduction}</p>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="zoom-out" data-aos-delay={100}>
              <img src="assets/img/about.jpg" className="img-fluid" alt />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={100}>
              <h3>{props.content.Heading}</h3>
              <p className="font-italic">{props.content.Body}</p>
              <ul>
                <li>
                  <i className="bx bx-store-alt" />
                  <div>
                    <h5>{props.content.Head1}</h5>
                    <p>{props.content.body1}</p>
                  </div>
                </li>
                <li>
                  <i className="bx bx-images" />
                  <div>
                    <h5>{props.content.Head2}</h5>
                    <p>{props.content.body2}</p>
                  </div>
                </li>
              </ul>
              <p>{props.content.mainbody}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}