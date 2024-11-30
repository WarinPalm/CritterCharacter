import React from 'react'
import Navbar from '../Compenents/Navbar'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    // ตรวจสอบว่ามีประวัติอยู่ใน localStorage หรือไม่
    const historyExists = localStorage.getItem('quizHistory');

    if (historyExists) {
      const confirmReset = window.confirm(
        'คุณมีประวัติการเล่นค้างอยู่ คุณต้องการเล่นใหม่หรือไม่?'
      );

      if (confirmReset) {
        // ล้างประวัติและเริ่มใหม่
        localStorage.removeItem('quizHistory');
        localStorage.removeItem('quizCurrentIndex');
        localStorage.removeItem('visitedIndexes');
        localStorage.removeItem('answerCount');
        localStorage.removeItem('point');
        navigate('../quiz');
      }
    } else {
      // ถ้าไม่มีประวัติ ให้เริ่มเกมใหม่
      navigate('../quiz');
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="container">
        <div
          className="w-100 d-flex flex-column justify-content-center align-items-center position-relative"
          style={{ height: '100vh' }}>
          <button className="btn btn-custom mb-3 p-3" onClick={handleStartQuiz}>
            Start the Animal Quiz
          </button>
          <h1>Discover your wild personality</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse atque aliquam cumque.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor, sit amet consectetur.</p>
        </div>
      </div>


    </>
  )
}

export default Home