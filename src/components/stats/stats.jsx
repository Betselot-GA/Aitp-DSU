import React from 'react'

const Stats = () => {
    
    return (
        <>
            <section className="section-sm bg-primary">
  <div className="container">
    <div className="row">
      
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
        <div className="text-center">
          <h2 className="count text-white" data-count="30">0</h2>
          <h5 className="text-white">TEACHERS</h5>
        </div>
      </div>
     
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
        <div className="text-center">
          <h2 className="count text-white" data-count="50">0</h2>
          <h5 className="text-white">Engagements</h5>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
        <div className="text-center">
          <h2 className="count text-white" data-count="180">0</h2>
          <h5 className="text-white">STUDENTS</h5>
        </div>
      </div>
  
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
        <div className="text-center">
          <h2 className="count text-white" data-count="37">0</h2>
          <h5 className="text-white">Events</h5>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
        )
}
 
export default Stats;