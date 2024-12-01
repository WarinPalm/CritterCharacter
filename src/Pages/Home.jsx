import React from "react";
import Navbar from "../Compenents/Navbar";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  //สำหรับจัดการตอนเริ่มเกม
  const handleStartQuiz = () => {
    const historyExists = localStorage.getItem("quizHistory");

    if (historyExists) { //หากผู้เล่นมีประวัติการเล่นอยู่ 
      const confirmReset = window.confirm("You have a pending play history. Do you want to play again?"); //ถามว่าต้องการเริ่มใหม่มั้ย

      if (confirmReset) { //ถ้ากด confirm
        localStorage.removeItem("quizHistory"); //ลบคำถามทั้งหมดที่เคยสุ่มมา
        localStorage.removeItem("quizCurrentIndex"); //ลบคำถามที่เคยอยู่ ณ ตอนนั้น
        localStorage.removeItem("visitIndex"); //ลบคำถามที่เคยตอบไปแล้ว
        localStorage.removeItem("answerCount"); //ลบประวัติที่เคยตอบช้อยไปป
        localStorage.removeItem("point"); //เคลียร์คะแนนให้เป็น 0 
        navigate("../quiz");
      }
    } else { //ถ้าผู้เล่นไม่เคยมีประวัติการเล่นมาก่อน ให้เริ่มเกมได้เลย
      navigate("../quiz");
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex align-items-center justify-content-center bg-cover text-center"
        style={{ minHeight: "100vh", backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center",}}>
        <div className="bg-white bg-opacity-75 p-5 rounded shadow-lg w-75">
          <h1 className="display-4 fw-bold text-primary mb-4">
            Discover Your Wild Personality
          </h1>
          <p className="lead text-black fw-semibold mb-4">
            Dive into an exciting journey to discover which animal matches your
            personality the most. Are you ready to unleash your wild side?
          </p>
          <button className="btn btn-primary btn-lg px-5 py-3 shadow" onClick={handleStartQuiz}>
            Start the Animal Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;