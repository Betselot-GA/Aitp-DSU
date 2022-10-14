import React from 'react'

const AboutSection = () => {
    
    return(
        <>
            <section className="section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 order-2 order-md-1">
        <h2 className="section-title">ITSA</h2>
        <p>The Association of Information Technology Professionals (AITP) provides a mechanism for students of high schools, colleges and universities to become members of the association through a student chapter. Each student must be affiliated with a single educational institution that provides a faculity advisor to the student chapter. </p>
        <p> There must be a minimum of 10 qualified students to start a student chapter. The faculity advisor must be a member of educational staff of the highschool, college, or university, according to the policies of that institution, and further, must be a member of AITP in good standing.</p>
        <a href="/about" className="btn btn-outline-primary">Learn more</a>
      </div>
      <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
        <img className="img-fluid w-100" src="images/about/about-us.jpg" alt="about image" />
      </div>
    </div>
  </div>
</section>
        </>
        );
    
}
 
export default AboutSection;