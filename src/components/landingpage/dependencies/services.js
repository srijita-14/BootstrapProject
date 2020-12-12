import React from 'react';
export const Service = (props) => {
  return (
    <div>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <h3>Welcome to our <span>Services</span></h3>
            <p>{props.content.head1}</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
              <div className="icon-box">
                <div className="icon"><i className="bx bxl-dribbble" /></div>
                <h4><a href>{props.content.top2}</a></h4>
                <p>{props.content.str2}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
              <div className="icon-box">
                <div className="icon"><i className="bx bx-file" /></div>
                <h4><a href>{props.content.top1}</a></h4>
                <p>{props.content.head2}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
              <div className="icon-box">
                <div className="icon"><i className="bx bx-tachometer" /></div>
                <h4><a href>{props.content.top3}</a></h4>
                <p>{props.content.str3}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={100}>
              <div className="icon-box">
                <div className="icon"><i className="bx bx-world" /></div>
                <h4><a href>{props.content.top4}</a></h4>
                <p>{props.content.str4}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={200}>
              <div className="icon-box">
                <div className="icon"><i className="bx bx-slideshow" /></div>
                <h4><a href>{props.content.top5}</a></h4>
                <p>{props.content.str5}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
              <div className="icon-box">
                <div className="icon"><i className="bx bx-arch" /></div>
                <h4><a href>{props.content.top6}</a></h4>
                <p>{props.content.str6}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}