import React from 'react'
import Navbar from '../Compenents/Navbar'

function Result() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Your result</h1> 
        <div className="row justify-content-center">
          <div className="col-8"> 
            <div className="card">
              <div className="card-body text-center">
                <img src="/logo.png" alt="Result" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Result