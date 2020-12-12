import React from 'react';
export const Featuring = (props) => {
  return (
    <div>
      <section id="featured-services" className="featured-services">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon"><i className="bx bxl-dribbble" /></div>
                <h4 className="title"><a href>{props.content.feature1}</a></h4>
                <p className="description">{props.content.string1}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                <div className="icon"><i className="bx bx-file" /></div>
                <h4 className="title"><a href>{props.content.feature2}</a></h4>
                <p className="description">{props.content.string2}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                <div className="icon"><i className="bx bx-tachometer" /></div>
                <h4 className="title"><a href>{props.content.feature3}</a></h4>
                <p className="description">{props.content.string3}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                <div className="icon"><i className="bx bx-world" /></div>
                <h4 className="title"><a href>{props.content.feature4}</a></h4>
                <p className="description">{props.content.string4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}