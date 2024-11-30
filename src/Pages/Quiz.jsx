import React, { useEffect, useState } from 'react';
import Navbar from '../Compenents/Navbar';

function Quiz() {
    const totalQuestions = 25;

    const getRandomQuestion = (sameQuestions = []) => {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * totalQuestions) + 1;
        } while (sameQuestions.includes(randomNumber));
        return randomNumber;
    };

    const loadState = () => {
        const savedHistory = JSON.parse(localStorage.getItem('quizHistory')) || [getRandomQuestion()];
        const savedVisitedIndexes = JSON.parse(localStorage.getItem('visitedIndexes')) || {};
        const savedIndex = parseInt(localStorage.getItem('quizCurrentIndex'), 10) || 0;
        const savedAnswerCount = parseInt(localStorage.getItem('answerCount'), 10) || 0;
        const savedPoint = parseInt(localStorage.getItem('point'), 10) || 0;
        
        return { savedHistory, savedVisitedIndexes, savedIndex, savedAnswerCount, savedPoint };
    };

    const { savedHistory, savedVisitedIndexes, savedIndex, savedAnswerCount, savedPoint } = loadState();
    const [history, setHistory] = useState(savedHistory);
    const [currentIndex, setCurrentIndex] = useState(savedIndex);
    const [answerCount, setAnswerCount] = useState(savedAnswerCount);
    const [visitedIndexes, setVisitedIndexes] = useState(savedVisitedIndexes); // เก็บข้อมูลของ index ที่เคยตอบพร้อมค่าแต้ม
    const [points, setPoints] = useState(savedPoint); // เก็บแต้มรวมทั้งหมด

    useEffect(() => {
        localStorage.setItem('quizHistory', JSON.stringify(history));
        localStorage.setItem('visitedIndexes', JSON.stringify(visitedIndexes));
        localStorage.setItem('quizCurrentIndex', currentIndex);
        localStorage.setItem('answerCount', answerCount);
        localStorage.setItem('point', points);
    }, [history, currentIndex, answerCount, visitedIndexes, points]);

    const handleAnswer = (ansPoint) => {
        const currentVisited = visitedIndexes[currentIndex] || null;

        // ถ้ามีคำตอบอยู่แล้ว ให้ลบแต้มเก่าออกก่อน
        if (currentVisited !== null) {
            setPoints((prevPoints) => prevPoints - currentVisited);
        } else {
            // เพิ่มจำนวนคำตอบเมื่อยังไม่เคยตอบคำถามนี้
            setAnswerCount((prevCount) => prevCount + 1);
        }

        // เพิ่มแต้มใหม่และอัปเดตคำตอบใน visitedIndexes
        setPoints((prevPoints) => prevPoints + ansPoint);
        setVisitedIndexes((prevVisited) => ({
            ...prevVisited,
            [currentIndex]: ansPoint,
        }));

        NextQuestion();
    };

    const NextQuestion = () => {
        
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

    const currentQuestion = history[currentIndex];
    const currentAnswer = visitedIndexes[currentIndex] || null;
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
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Exploring new places or hobbies.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Hanging out with friends or family.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Reading a book or solving puzzles.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Relaxing with your favorite shows.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
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
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Carefully analyze all options and proceed logically.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Get advice from friends or trusted individuals.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Use your instincts and make quick decisions.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Step back and let things resolve themselves naturally.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 3 */}
                {currentQuestion === 3 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>How do others describe you?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Playful and full of energy.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Bold and determined to achieve goals.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Wise and mysterious.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Gentle and tolerant.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 4 */}
                {currentQuestion === 4 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>What’s your favorite activity?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Playing games or running around with others.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Observing and learning new things.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Taking on challenges and risks.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Exploring independently and trying new things.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 5 */}
                {currentQuestion === 5 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>How do you respond to challenges?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Stay calm and think through them logically.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Face them boldly and with confidence.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Tackle them with a curious and open mind.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Lean on others for support and guidance.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 6 */}
                {currentQuestion === 6 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>What’s your favorite way to spend time with friends?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Discussing meaningful topics or learning something new.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Going on adventures or trying something exciting.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Relaxing and being playful together.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Being around them but doing your own thing.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 7 */}
                {currentQuestion === 7 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>What’s your reaction to change?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Embrace it and adapt quickly.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Think through the implications carefully.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Seek stability and minimize disruption.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Welcome the challenge and take risks.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 8 */}
                {currentQuestion === 8 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>What motivates you most?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Achieving goals and being recognized for success.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Understanding the world and gaining wisdom.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Making others happy and fostering connections.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Exploring new things and satisfying curiosity.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 9 */}
                {currentQuestion === 9 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>What’s your favorite environment?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>A lively, bustling place full of energy.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>A quiet, peaceful space to reflect.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>A cozy spot surrounded by loved ones.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>A familiar area where you can be comfortable.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 10*/}
                {currentQuestion === 10 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>What describes your social style?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Outgoing and eager to meet new people.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Observant, preferring meaningful conversations.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Fun-loving and easygoing.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Ambitious and seeking connections with a purpose.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 11 */}
                {currentQuestion === 11 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>How do you approach goals?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Plan methodically and execute precisely.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Stay determined and keep trying until you succeed.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Tackle them with enthusiasm and spontaneity.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Focus on achieving results as quickly as possible.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 12 */}
                {currentQuestion === 12 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>What’s your dream vacation?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>An adventurous trip exploring the unknown.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>A luxurious, fun-filled getaway with friends.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>A serene retreat to relax and recharge.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>A family-friendly destination with activities for all ages.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 13 */}
                {currentQuestion === 13 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>How do you react under pressure?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Stay calm and logically find a solution.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Push through with determination and confidence.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Rely on past wisdom and careful thinking.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Seek support and work together with others.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 14 */}
                {currentQuestion === 14 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>How do you feel about rules?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Prefer a structured and logical framework.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Respect them but will bend them if needed.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Like to find creative ways around them.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Avoid them if they limit your freedom.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 15 */}
                {currentQuestion === 15 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>What’s your greatest strength?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Wisdom and understanding of complex matters.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Boldness and determination to achieve goals.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Curiosity and enthusiasm for new things.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Gentleness and patience with others.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 16 */}
                {currentQuestion === 16 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>How do you handle group projects?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Take charge and lead the way.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Contribute ideas and help where needed.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Analyze tasks and ensure efficiency.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Stay in the background but offer support.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 17 */}
                {currentQuestion === 17 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>How do you make decisions?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Trust your instincts and make quick choices.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Reflect on options and think them through.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Take advice from trusted people.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Go with the flow and let things happen.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 18 */}
                {currentQuestion === 18 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>What’s your communication style?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Direct and assertive in expressing your ideas.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Gentle and considerate of others’ feelings.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Logical and to the point.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Mysterious and thought-provoking.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 19 */}
                {currentQuestion === 19 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>What’s your ideal work style?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Collaborating and connecting with others.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Working independently with a clear plan.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Learning new things while enjoying the process.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Helping others achieve their best.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 20*/}
                {currentQuestion === 20 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>How do you relax?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Spending time with loved ones or friends.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Enjoying quiet, introspective activities.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Exploring hobbies or new interests.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Watching a favorite show or reading.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 21 */}
                {currentQuestion === 21 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>What inspires you?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Discovering and mastering new skills.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Making meaningful connections with people.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Pushing boundaries and achieving success.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Pushing boundaries and achieving success.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 22 */}
                {currentQuestion === 22 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>How do you handle criticism?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Use it to improve and grow.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Consider the advice but stick to your beliefs.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Accept it gracefully and move on.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Shrug it off and focus on your goals.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 23 */}
                {currentQuestion === 23 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>What’s your leadership style?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Lead by example with a clear, logical approach.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Encourage collaboration and motivate others.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Focus on results and assertiveness.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Inspire others with curiosity and independence.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 24 */}
                {currentQuestion === 24 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>How do you handle unexpected situations?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Adapt quickly and find creative solutions.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Analyze carefully and develop a plan.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Stay calm and rely on your instincts.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Face them boldly and take action immediately.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 25 */}
                {currentQuestion === 25 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>What makes you happiest?</h1>
                            </div>
                        </div>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 4 ? 'active' : ''}`} onClick={() => handleAnswer(4)}>Solving a tough problem or learning something new.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 3 ? 'active' : ''}`} onClick={() => handleAnswer(3)}>Sharing love and making others smile.</button>
                        <button className={`btn btn-custom w-75 mt-3 ${currentAnswer === 2 ? 'active' : ''}`} onClick={() => handleAnswer(2)}>Exploring the unknown and trying new things.</button>
                        <button className={`btn btn-custom w-75 mt-3 mb-3 ${currentAnswer === 1 ? 'active' : ''}`} onClick={() => handleAnswer(1)}>Achieving a goal or milestone.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <h2>ข้อที่ {currentIndex + 1}/{totalQuestions}</h2>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Quiz;
