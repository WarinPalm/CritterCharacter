import React from 'react'
import Navbar from '../Compenents/Navbar'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div
          className="w-100 d-flex flex-column justify-content-center align-items-center position-relative"
          style={{ height: '100vh' }}>
          <Link to="../quiz"><button className="btn btn-custom mb-3 p-3"> Start the Animal Quiz </button></Link>          
          <h1>Discovery your wild personality</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse atque aliquam cumque. </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
          <p>Lorem ipsum dolor, sit amet consectetur  </p>
        </div>
      </div>


    </>
  )
}

export default Home