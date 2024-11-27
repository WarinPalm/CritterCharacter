import React from 'react'
import Navbar from '../Compenents/Navbar'
import { Link } from 'react-router-dom'
function Quiz() {
  return (
      <>  
        <Navbar />
        <div className="container">
        <div
          className="w-100 d-flex flex-column justify-content-center align-items-center position-relative"
          style={{ height: '100vh' }}>
          <div className="card w-75 mb-5">
            <div className="card-body text-center">
                <h1>คำถามที่ 1</h1>
            </div>
          </div>
          <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 1 </button>
          <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 2 </button>
          <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 3 </button>
          <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 4 </button>
        </div>
      </div>
    </>
  )
}

export default Quiz