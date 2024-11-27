import React, { useState } from 'react';
import Navbar from '../Compenents/Navbar';

function Quiz() {
    const totalQuestions = 10;

    // สุ่มคำถามแรกเมื่อเริ่มเกม
    const getRandomQuestion = (sameQuestions = []) => {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * totalQuestions) + 1;
        } while (sameQuestions.includes(randomNumber)); // สุ่มจนกว่าจะไม่ซ้ำกับคำถามเดิม
        return randomNumber;
    };

    // เริ่มต้นด้วยคำถามแบบสุ่ม
    const [history, setHistory] = useState([getRandomQuestion()]); // เก็บประวัติคำถาม
    const [currentIndex, setCurrentIndex] = useState(0); // index ของคำถามปัจจุบัน

    const NextQuestion = () => {
        // ถ้าตอบครบ 10 ข้อแล้ว
        if (history.length === totalQuestions) {
            alert('คุณตอบครบทุกคำถามแล้ว!');
            return;
        }

        // ถ้าอยู่ที่คำถามล่าสุด ให้สุ่มคำถามใหม่เตรียมไว้
        if (currentIndex === history.length - 1) {
            const nextQuestion = getRandomQuestion(history);
            setHistory([...history, nextQuestion]); // เพิ่มคำถามใหม่ในประวัติ
            setCurrentIndex(currentIndex + 1); // ไปยังคำถามใหม่
        } else {
            // ถ้าไม่ได้อยู่คำถามล่าสุด ก็ให้รันตาม index ใน history
            setCurrentIndex(currentIndex + 1);
        }
    };

    const PrevQuestion = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1); // ย้อนกลับไปยังคำถามก่อนหน้า
        }
    };

    const currentQuestion = history[currentIndex]; // คำถามปัจจุบัน
    console.log(history)
    return (
        <>
            <Navbar />
            <div className="container">

                {/* คำถามที่ 1 */}
                {currentQuestion === 1 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 1</h1>
                            </div>
                        </div>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 1</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 2</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 3</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">ตัวเลือกที่ 4</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>ก่อนหน้า</button>
                            <button className="btn btn-custom" onClick={NextQuestion}>ถัดไป</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 2 */}
                {currentQuestion === 2 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 2</h1>
                            </div>
                        </div>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 1</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 2</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 3</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">ตัวเลือกที่ 4</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>ก่อนหน้า</button>
                            <button className="btn btn-custom" onClick={NextQuestion}>ถัดไป</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 3 */}
                {currentQuestion === 3 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 3</h1>
                            </div>
                        </div>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 1</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 2</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 3</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">ตัวเลือกที่ 4</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>ก่อนหน้า</button>
                            <button className="btn btn-custom" onClick={NextQuestion}>ถัดไป</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 4 */}
                {currentQuestion === 4 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 4</h1>
                            </div>
                        </div>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 1</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 2</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 3</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">ตัวเลือกที่ 4</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>ก่อนหน้า</button>
                            <button className="btn btn-custom" onClick={NextQuestion}>ถัดไป</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 5 */}
                {currentQuestion === 5 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 5</h1>
                            </div>
                        </div>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 1</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 2</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 3</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">ตัวเลือกที่ 4</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>ก่อนหน้า</button>
                            <button className="btn btn-custom" onClick={NextQuestion}>ถัดไป</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 6 */}
                {currentQuestion === 6 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 6</h1>
                            </div>
                        </div>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 1</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 2</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 3</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">ตัวเลือกที่ 4</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>ก่อนหน้า</button>
                            <button className="btn btn-custom" onClick={NextQuestion}>ถัดไป</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 7 */}
                {currentQuestion === 7 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 7</h1>
                            </div>
                        </div>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 1</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 2</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 3</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">ตัวเลือกที่ 4</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>ก่อนหน้า</button>
                            <button className="btn btn-custom" onClick={NextQuestion}>ถัดไป</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 8 */}
                {currentQuestion === 8 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 8</h1>
                            </div>
                        </div>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 1</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 2</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 3</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">ตัวเลือกที่ 4</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>ก่อนหน้า</button>
                            <button className="btn btn-custom" onClick={NextQuestion}>ถัดไป</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 9 */}
                {currentQuestion === 9 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 9</h1>
                            </div>
                        </div>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 1</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 2</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 3</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">ตัวเลือกที่ 4</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>ก่อนหน้า</button>
                            <button className="btn btn-custom" onClick={NextQuestion}>ถัดไป</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 10*/}
                {currentQuestion === 10 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 10</h1>
                            </div>
                        </div>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 1</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 2</button>
                        <button className="btn btn-custom w-75 mt-3">ตัวเลือกที่ 3</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">ตัวเลือกที่ 4</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>ก่อนหน้า</button>
                            <button className="btn btn-custom" onClick={NextQuestion}>ถัดไป</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Quiz;
