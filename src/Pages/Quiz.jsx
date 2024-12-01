import React, { useEffect, useState } from "react";
import Navbar from "../Compenents/Navbar";
import questions from "./questions"; 
import { Link } from "react-router-dom";

function Quiz() {
    const totalQuestions = questions.length; // จำนวนคำถามทั้งหมด

    const getRandomQuestion = (sameQuestions = []) => {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * totalQuestions) + 1;
        } while (sameQuestions.includes(randomNumber));
        return randomNumber;
    };

    const loadState = () => {
        const savedHistory = JSON.parse(localStorage.getItem("quizHistory")) || [getRandomQuestion()]; 
        const savedVisitedIndexes = JSON.parse(localStorage.getItem("visitedIndexes")) || {};
        const savedIndex = parseInt(localStorage.getItem("quizCurrentIndex"), 10) || 0;
        const savedAnswerCount = parseInt(localStorage.getItem("answerCount"), 10) || 0;
        const savedPoint = parseInt(localStorage.getItem("point"), 10) || 0;

        return { savedHistory, savedVisitedIndexes, savedIndex, savedAnswerCount, savedPoint };
    };

    const { savedHistory, savedVisitedIndexes, savedIndex, savedAnswerCount, savedPoint } = loadState();
    const [history, setHistory] = useState(savedHistory);
    const [currentIndex, setCurrentIndex] = useState(savedIndex);
    const [answerCount, setAnswerCount] = useState(savedAnswerCount);
    const [visitedIndexes, setVisitedIndexes] = useState(savedVisitedIndexes); // เก็บคำตอบ
    const [points, setPoints] = useState(savedPoint); // คะแนนรวม

    useEffect(() => {
        localStorage.setItem("quizHistory", JSON.stringify(history));
        localStorage.setItem("visitedIndexes", JSON.stringify(visitedIndexes));
        localStorage.setItem("quizCurrentIndex", currentIndex);
        localStorage.setItem("answerCount", answerCount);
        localStorage.setItem("point", points);
    }, [history, currentIndex, answerCount, visitedIndexes, points]);

    const handleAnswer = (ansPoint) => {
        const currentVisited = visitedIndexes[currentIndex] || null;

        if (currentVisited !== null) {
            setPoints((prevPoints) => prevPoints - currentVisited);
        } else {
            setAnswerCount((prevCount) => prevCount + 1);
        }

        setPoints((prevPoints) => prevPoints + ansPoint);
        setVisitedIndexes((prevVisited) => ({
            ...prevVisited,
            [currentIndex]: ansPoint,
        }));

        NextQuestion();
    };

    const NextQuestion = () => {
        if (currentIndex === totalQuestions - 1) {
            alert("You have reached the last question!");
            return;
        }

        if (currentIndex === history.length - 1) {
            const nextQuestion = getRandomQuestion(history);
            setHistory([...history, nextQuestion]);
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const PrevQuestion = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const currentQuestion = questions[currentIndex]; // ดึงคำถามจาก questions.js
    const currentAnswer = visitedIndexes[currentIndex] || null;

    return (
        <>
            <Navbar />
            <div className="container d-flex flex-column align-items-center">
                <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: "100vh" }}>
                    <div className="card w-75 mb-5">
                        <div className="card-body text-center">
                            <h1>{currentQuestion.question}</h1>
                        </div>
                    </div>
                    {currentQuestion.answers.map((answer, index) => (
                        <button key={index} className={`btn btn-custom w-75 mt-3 ${currentAnswer === answer.points ? "btn-active" : ""}`}
                            onClick={() => handleAnswer(answer.points)}>
                            {answer.text}
                        </button>
                    ))}
                    <div className="d-flex justify-content-between mt-5 w-75">
                        <button className="btn btn-custom" onClick={PrevQuestion} disabled={currentIndex === 0}>Prev</button>
                        <h2>Question {currentIndex + 1}/{totalQuestions}</h2>
                        <button className="btn btn-custom" onClick={NextQuestion} disabled={currentIndex === questions.length-1}>Next</button>
                    </div>
                    {Object.keys(visitedIndexes).length === totalQuestions ?(
                        <Link to="../result"><button className="btn btn-success mt-4">Check Your Result!</button></Link>
                    ) : ''}
                </div>
            </div>
        </>
    );
}

export default Quiz;
