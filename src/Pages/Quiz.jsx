import React, { useEffect, useState } from "react";
import Navbar from "../Compenents/Navbar";
import questions from "./questions"; // นำเข้าคำถามจากไฟล์ questions.js
import { Link } from "react-router-dom";

function Quiz() {
    const totalQuestions = questions.length; // จำนวนคำถามทั้งหมด

    // ฟังก์ชันสำหรับสุ่มคำถาม
    const getRandomQuestion = (sameQuestions = []) => {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * totalQuestions);
        } while (sameQuestions.includes(randomNumber)); // ตรวจสอบไม่ให้คำถามซ้ำ
        return randomNumber;
    };

    // โหลดสถานะจาก localStorage
    const loadState = () => {
        const savedHistory = JSON.parse(localStorage.getItem("quizHistory")) || [getRandomQuestion()];  //ดึงคำถามที่ถูกสุ่มออกมาแล้ว
        const savedvisitIndex = JSON.parse(localStorage.getItem("visitIndex")) || {}; //ดึงคำถามที่เคยตอบแล้ว
        const savedIndex = parseInt(localStorage.getItem("quizCurrentIndex"), 10) || 0; //ดึงว่าอยู่คำถามข้อไหนแล้ว
        const savedAnsCount = parseInt(localStorage.getItem("answerCount"), 10) || 0; //ดึงจำนวนคำถามที่ผู้เล่นตอบไปแล้ว
        const savedPoint = parseInt(localStorage.getItem("point"), 10) || 0; //ดึงแต้มของผู้เล่น

        return { savedHistory, savedvisitIndex, savedIndex, savedAnsCount, savedPoint };
    };

    //ตัวแปรต่างๆ
    const { savedHistory, savedvisitIndex, savedIndex, savedAnsCount, savedPoint } = loadState(); //ดึงค่าต่างๆจาก localstore มาใส่ในตัวแปรเหล่านี้
    const [history, setHistory] = useState(savedHistory); // เก็บลำดับคำถามที่สุ่ม
    const [currentIndex, setCurrentIndex] = useState(savedIndex); // ตำแหน่งคำถามปัจจุบัน
    const [answerCount, setAnswerCount] = useState(savedAnsCount); // จำนวนคำถามที่ตอบแล้ว
    const [visitIndex, setvisitIndex] = useState(savedvisitIndex); // เก็บคำตอบที่ตอบแล้ว
    const [points, setPoints] = useState(savedPoint); // คะแนนรวม

    useEffect(() => {
        localStorage.setItem("quizHistory", JSON.stringify(history)); // localstore สำหรับเก็บคำถามที่ถูกสุ่มออกมาแล้ว
        localStorage.setItem("visitIndex", JSON.stringify(visitIndex)); // localstore สำหรับเก็บคำถามที่เคยตอบแล้ว
        localStorage.setItem("quizCurrentIndex", currentIndex); // localstore สำหรับเก็บว่าอยู่คำถามข้อไหนแล้ว
        localStorage.setItem("answerCount", answerCount); // localstore สำหรับเก็บจำนวนคำถามที่ผู้เล่นตอบไปแล้ว (ผู้เล่นสามารถข้ามข้อไปตอบข้ออื่นได้)
        localStorage.setItem("point", points); // localstore สำหรับเก็บแต้มของผู้เล่น
    }, [history, currentIndex, answerCount, visitIndex, points]);

    // เมื่อผู้เล่นตอบคำถาม
    const handleAnswer = (ansPoint) => {
        const currentPoint = visitIndex[currentIndex] || null; //เช็คคะแนนของข้อนั้น หากผู้เล่นเคยตอบ ถ้าผู้เล่นยังไม่เคยตอบให้คืนค่า null

        // หากเคยตอบคำถามนี้แล้ว ให้ลบคะแนนเก่าออก
        if (currentPoint !== null) {
            setPoints((prevPoints) => prevPoints - currentPoint);
        } else {
            // หากคำถามนั้นยังไม่เคยตอบ ให้เพิ่มจำนวนคำถามที่ตอบ
            setAnswerCount((prevCount) => prevCount + 1);
        }

        // บันทึกคำตอบใหม่และอัปเดตคะแนน เพื่อจะได้รู้ว่าผู้เล่นตอบช้อยไหนไปในข้อนั้น
        setPoints((prevPoints) => prevPoints + ansPoint);
        setvisitIndex((prevVisited) => ({...prevVisited, [currentIndex]: ansPoint,}));

        NextQuestion();
    };

    // ไปคำถามถัดไป
    const NextQuestion = () => {
        if (currentIndex === totalQuestions - 1) { //ถ้าถึงคำตอบที่ 25 
            alert("You have reached the last question!");
            return;
        }

        if (currentIndex === history.length - 1) { //ถ้ายังไม่ถึงคำตอบที่ 25
            const nextQuestion = getRandomQuestion(history); // สุ่มคำถามใหม่
            setHistory([...history, nextQuestion]); //เพิ่มคำถามใหม่ลงใน array ของ history 
            setCurrentIndex(history.length); // ไปยังคำถามใหม่
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // ย้อนกลับไปคำถามก่อนหน้า
    const PrevQuestion = () => {
        if (currentIndex > 0) { 
            setCurrentIndex(currentIndex - 1);
        }
    };

    // ดึงคำถามปัจจุบันโดยใช้ history
    const currentQuestionIndex = history[currentIndex]; //คำถามที่ผู้เล่นอยู่ ณ ตอนนั้น
    const currentQuestion = questions[currentQuestionIndex]; //เรียกใช้เพื่อแสดงคำถามให้ผู้เล่นเห็น
    const currentAnswer = visitIndex[currentIndex] || null; //สำหรับติ้ก ว่า ผู้เล่นตอบช้อยข้อไหนไป

    return (
        <>
            <Navbar />
            <div className="container d-flex flex-column align-items-center">
                <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative"style={{ height: "100vh" }}>
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
                        <button className="btn btn-custom" onClick={PrevQuestion} disabled={currentIndex === 0}>
                            Prev
                        </button>
                        <h2>Question {currentIndex + 1}/{totalQuestions}</h2>
                        <button className="btn btn-custom" onClick={NextQuestion} disabled={currentIndex === totalQuestions - 1}>
                            Next
                        </button>
                    </div>
                    {Object.keys(visitIndex).length === totalQuestions ? ( //หากผู้เล่นตอบคำถามครบ 25 ข้อให้แสดงปุ่มไปดูผลลัพธ์ว่าได้สัตว์ตัวอะไร
                        <Link to="../result"><button className="btn btn-success mt-4"> Check Your Result! </button></Link>
                    ) : ("")}
                </div>
            </div>
        </>
    );
}

export default Quiz;
