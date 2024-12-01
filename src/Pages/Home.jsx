import React from "react";
import Navbar from "../Compenents/Navbar";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    const historyExists = localStorage.getItem("quizHistory");

    if (historyExists) {
      const confirmReset = window.confirm(
        "คุณมีประวัติการเล่นค้างอยู่ คุณต้องการเล่นใหม่หรือไม่?"
      );

      if (confirmReset) {
        localStorage.removeItem("quizHistory");
        localStorage.removeItem("quizCurrentIndex");
        localStorage.removeItem("visitedIndexes");
        localStorage.removeItem("answerCount");
        localStorage.removeItem("point");
        navigate("../quiz");
      }
    } else {
      navigate("../quiz");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="text-center">
          <h1 className="display-4 fw-bold text-primary mb-4">
            Discover Your Wild Personality
          </h1>
          <p className="lead text-secondary mb-4">
            Dive into an exciting journey to discover which animal matches your
            personality the most. Are you ready to unleash your wild side?
          </p>
          <button
            className="btn btn-custom btn-lg px-5 py-3 mb-3 shadow"
            onClick={handleStartQuiz}
          >
            Start the Animal Quiz
          </button>
        </div>
        
      </div>
    </>
  );
}

export default Home;
