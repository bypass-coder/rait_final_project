import React from 'react'
import FunFact from './FunFact'

const FunFacts = () => {

    const funFacts = {
        funfact1:{
            title:'Hospital Rooms',
            icon:'icofont-home',
            count:3468,
        },
        funfact2:{
            title:'Specialist Doctors',
            icon:'icofont-user-alt-3',
            count:557,
        },
        funfact3:{
            title:'Happy Patients',
            icon:'icofont-simple-smile',
            count:4379,
        },
        funfact4:{
            title:'Years of Experience',
            icon:'icofont-table',
            count:32,
        }
    }


  return (
    <>
      <div id="fun-facts" className="fun-facts section overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <FunFact funFacts={funFacts.funfact1}/>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <FunFact funFacts={funFacts.funfact2}/>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <FunFact funFacts={funFacts.funfact3}/>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <FunFact funFacts={funFacts.funfact4}/>
                {/* End Single Fun */}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default FunFacts
