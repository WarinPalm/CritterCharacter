import React, { useEffect, useState } from 'react';
import Navbar from '../Compenents/Navbar';

function Quiz() {
    const totalQuestions = 25;

    // สุ่มคำถามแรกเมื่อเริ่มเกม
    const getRandomQuestion = (sameQuestions = []) => {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * totalQuestions) + 1;
        } while (sameQuestions.includes(randomNumber)); // สุ่มจนกว่าจะไม่ซ้ำกับคำถามเดิม
        return randomNumber;
    };

    // โหลดสถานะจาก localStorage ถ้ามี
    const loadState = () => {
        const savedHistory = JSON.parse(localStorage.getItem('quizHistory')) || [getRandomQuestion()];
        const savedIndex = parseInt(localStorage.getItem('quizCurrentIndex'), 10) || 0;
        return { savedHistory, savedIndex };
    };

    // เซ็ตสถานะเริ่มต้น
    const { savedHistory, savedIndex } = loadState();
    const [history, setHistory] = useState(savedHistory); // เก็บประวัติคำถาม
    const [currentIndex, setCurrentIndex] = useState(savedIndex); // index ของคำถามปัจจุบัน

    // บันทึกสถานะลง localStorage เมื่อ history หรือ currentIndex เปลี่ยนแปลง
    useEffect(() => {
        localStorage.setItem('quizHistory', JSON.stringify(history));
        localStorage.setItem('quizCurrentIndex', currentIndex);
    }, [history, currentIndex]);

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
    console.log(currentQuestion)
    return (
        <>
            <Navbar />
            <div className="container">

                {/* คำถามที่ 1 */}
                {currentQuestion === 1 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>How do you spend your weekend?</h1>
                            </div>
                        </div>
                        <button className="btn btn-custom w-75 mt-3">Exploring new places or hobbies.</button>
                        <button className="btn btn-custom w-75 mt-3">Hanging out with friends or family.</button>
                        <button className="btn btn-custom w-75 mt-3">Reading a book or solving puzzles.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Relaxing with your favorite shows.</button>
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
                                <h1>What’s your approach to solving problems?</h1>
                            </div>
                        </div>
                        <button className="btn btn-custom w-75 mt-3">Carefully analyze all options and proceed logically.</button>
                        <button className="btn btn-custom w-75 mt-3">Get advice from friends or trusted individuals.</button>
                        <button className="btn btn-custom w-75 mt-3">Use your instincts and make quick decisions.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Step back and let things resolve themselves naturally.</button>
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
                                <h1>คHow do others describe you?</h1>
                            </div>
                        </div>
                        <button className="btn btn-custom w-75 mt-3">Playful and full of energy.</button>
                        <button className="btn btn-custom w-75 mt-3">Bold and determined to achieve goals.</button>
                        <button className="btn btn-custom w-75 mt-3">Wise and mysterious.</button>
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

                {/* คำถามที่ 11 */}
                {currentQuestion === 11 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 11</h1>
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

                {/* คำถามที่ 12 */}
                {currentQuestion === 12 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 12</h1>
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

                {/* คำถามที่ 13 */}
                {currentQuestion === 13 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 13</h1>
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

                {/* คำถามที่ 14 */}
                {currentQuestion === 14 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 14</h1>
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

                {/* คำถามที่ 15 */}
                {currentQuestion === 15 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 15</h1>
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

                {/* คำถามที่ 16 */}
                {currentQuestion === 16 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 16</h1>
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

                {/* คำถามที่ 17 */}
                {currentQuestion === 17 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 17</h1>
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

                {/* คำถามที่ 18 */}
                {currentQuestion === 18 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 18</h1>
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

                {/* คำถามที่ 19 */}
                {currentQuestion === 19 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 19</h1>
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

                {/* คำถามที่ 20*/}
                {currentQuestion === 20 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 20</h1>
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

                {/* คำถามที่ 21 */}
                {currentQuestion === 21 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 21</h1>
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

                {/* คำถามที่ 22 */}
                {currentQuestion === 22 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 22</h1>
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

                {/* คำถามที่ 23 */}
                {currentQuestion === 23 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 23</h1>
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

                {/* คำถามที่ 24 */}
                {currentQuestion === 24 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 24</h1>
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

                {/* คำถามที่ 25 */}
                {currentQuestion === 25 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>คำถามที่ 25</h1>
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
