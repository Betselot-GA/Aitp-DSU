import React from 'react';
const NoticeDetailLanding = ()=>{
  
    return (
      <>
        <section
          className="page-title-section overlay bg-cover"
          data-background="images/backgrounds/page-title.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <ul className="list-inline custom-breadcrumb mb-2">
                  <li className="list-inline-item">
                    <a
                      className="h2 text-primary font-secondary"
                      href="/notice"
                    >
                      Notice
                    </a>
                  </li>
                  <li className="list-inline-item text-white h3 font-secondary nasted">
                    Notice Details
                  </li>
                </ul>
                <p className="text-lighten mb-0">
                  Our courses offer a good compromise between the continuous
                  assessment favoured by some universities and the emphasis
                  placed on final exams by others.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
    
}
 
export default NoticeDetailLanding;