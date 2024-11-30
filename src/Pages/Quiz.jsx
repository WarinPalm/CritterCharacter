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
        // ถ้าตอบครบ 25 ข้อแล้ว
        if (history.length === totalQuestions && currentIndex === history.length - 1) {
            alert('มีคำถามเพียงแค่ 25 ข้อ');
            return;
        }
    
        // ถ้าอยู่ที่คำถามล่าสุด ให้สุ่มคำถามใหม่เตรียมไว้
        if (currentIndex === history.length - 1) {
            const nextQuestion = getRandomQuestion(history);
            setHistory([...history, nextQuestion]); // เพิ่มคำถามใหม่ในประวัติ
            setCurrentIndex(currentIndex + 1); // ไปยังคำถามใหม่
        } else {
            // ถ้าไม่ได้อยู่คำถามล่าสุด ก็ให้เลื่อนตาม index ใน history
            setCurrentIndex(currentIndex + 1);
        }
    };
    

    const PrevQuestion = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1); // ย้อนกลับไปยังคำถามPrev
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
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Carefully analyze all options and proceed logically.</button>
                        <button className="btn btn-custom w-75 mt-3">Get advice from friends or trusted individuals.</button>
                        <button className="btn btn-custom w-75 mt-3">Use your instincts and make quick decisions.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Step back and let things resolve themselves naturally.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Playful and full of energy.</button>
                        <button className="btn btn-custom w-75 mt-3">Bold and determined to achieve goals.</button>
                        <button className="btn btn-custom w-75 mt-3">Wise and mysterious.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Gentle and tolerant.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Playing games or running around with others.</button>
                        <button className="btn btn-custom w-75 mt-3">Observing and learning new things.</button>
                        <button className="btn btn-custom w-75 mt-3">Taking on challenges and risks.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Exploring independently and trying new things.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Stay calm and think through them logically.</button>
                        <button className="btn btn-custom w-75 mt-3">Face them boldly and with confidence.</button>
                        <button className="btn btn-custom w-75 mt-3">Tackle them with a curious and open mind.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Lean on others for support and guidance.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Discussing meaningful topics or learning something new.</button>
                        <button className="btn btn-custom w-75 mt-3">Going on adventures or trying something exciting.</button>
                        <button className="btn btn-custom w-75 mt-3">Relaxing and being playful together.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Being around them but doing your own thing.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Embrace it and adapt quickly.</button>
                        <button className="btn btn-custom w-75 mt-3">Think through the implications carefully.</button>
                        <button className="btn btn-custom w-75 mt-3">Seek stability and minimize disruption.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Welcome the challenge and take risks.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Achieving goals and being recognized for success.</button>
                        <button className="btn btn-custom w-75 mt-3">Understanding the world and gaining wisdom.</button>
                        <button className="btn btn-custom w-75 mt-3">Making others happy and fostering connections.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Exploring new things and satisfying curiosity.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">A lively, bustling place full of energy.</button>
                        <button className="btn btn-custom w-75 mt-3">A quiet, peaceful space to reflect.</button>
                        <button className="btn btn-custom w-75 mt-3">A cozy spot surrounded by loved ones.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">A familiar area where you can be comfortable.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Outgoing and eager to meet new people.</button>
                        <button className="btn btn-custom w-75 mt-3">Observant, preferring meaningful conversations.</button>
                        <button className="btn btn-custom w-75 mt-3">Fun-loving and easygoing.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Ambitious and seeking connections with a purpose.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Plan methodically and execute precisely.</button>
                        <button className="btn btn-custom w-75 mt-3">Stay determined and keep trying until you succeed.</button>
                        <button className="btn btn-custom w-75 mt-3">Tackle them with enthusiasm and spontaneity.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Focus on achieving results as quickly as possible.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">An adventurous trip exploring the unknown.</button>
                        <button className="btn btn-custom w-75 mt-3">A luxurious, fun-filled getaway with friends.</button>
                        <button className="btn btn-custom w-75 mt-3">A serene retreat to relax and recharge.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">A family-friendly destination with activities for all ages.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Stay calm and logically find a solution.</button>
                        <button className="btn btn-custom w-75 mt-3">Push through with determination and confidence.</button>
                        <button className="btn btn-custom w-75 mt-3">Rely on past wisdom and careful thinking.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Seek support and work together with others.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Prefer a structured and logical framework.</button>
                        <button className="btn btn-custom w-75 mt-3">Respect them but will bend them if needed.</button>
                        <button className="btn btn-custom w-75 mt-3">Like to find creative ways around them.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Avoid them if they limit your freedom.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Wisdom and understanding of complex matters.</button>
                        <button className="btn btn-custom w-75 mt-3">Boldness and determination to achieve goals.</button>
                        <button className="btn btn-custom w-75 mt-3">Curiosity and enthusiasm for new things.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Gentleness and patience with others.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Take charge and lead the way.</button>
                        <button className="btn btn-custom w-75 mt-3">Contribute ideas and help where needed.</button>
                        <button className="btn btn-custom w-75 mt-3">Analyze tasks and ensure efficiency.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Stay in the background but offer support.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Trust your instincts and make quick choices.</button>
                        <button className="btn btn-custom w-75 mt-3">Reflect on options and think them through.</button>
                        <button className="btn btn-custom w-75 mt-3">Take advice from trusted people.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Go with the flow and let things happen.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Direct and assertive in expressing your ideas.</button>
                        <button className="btn btn-custom w-75 mt-3">Gentle and considerate of others’ feelings.</button>
                        <button className="btn btn-custom w-75 mt-3">Logical and to the point.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Mysterious and thought-provoking.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Collaborating and connecting with others.</button>
                        <button className="btn btn-custom w-75 mt-3">Working independently with a clear plan.</button>
                        <button className="btn btn-custom w-75 mt-3">Learning new things while enjoying the process.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Helping others achieve their best.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Spending time with loved ones or friends.</button>
                        <button className="btn btn-custom w-75 mt-3">Enjoying quiet, introspective activities.</button>
                        <button className="btn btn-custom w-75 mt-3">Exploring hobbies or new interests.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Watching a favorite show or reading.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Discovering and mastering new skills.</button>
                        <button className="btn btn-custom w-75 mt-3">Making meaningful connections with people.</button>
                        <button className="btn btn-custom w-75 mt-3">Pushing boundaries and achieving success.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Pushing boundaries and achieving success.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Use it to improve and grow.</button>
                        <button className="btn btn-custom w-75 mt-3">Consider the advice but stick to your beliefs.</button>
                        <button className="btn btn-custom w-75 mt-3">Accept it gracefully and move on.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Shrug it off and focus on your goals.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Lead by example with a clear, logical approach.</button>
                        <button className="btn btn-custom w-75 mt-3">Encourage collaboration and motivate others.</button>
                        <button className="btn btn-custom w-75 mt-3">Focus on results and assertiveness.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Inspire others with curiosity and independence.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}

                {/* คำถามที่ 24 */}
                {currentQuestion === 24 && (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
                        <div className="card w-75 mb-5">
                            <div className="card-body text-center">
                                <h1>What’s your leadership style?</h1>
                            </div>
                        </div>
                        <button className="btn btn-custom w-75 mt-3">Lead by example with a clear, logical approach.</button>
                        <button className="btn btn-custom w-75 mt-3">Encourage collaboration and motivate others.</button>
                        <button className="btn btn-custom w-75 mt-3">Focus on results and assertiveness.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Inspire others with curiosity and independence.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
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
                        <button className="btn btn-custom w-75 mt-3">Solving a tough problem or learning something new.</button>
                        <button className="btn btn-custom w-75 mt-3">Sharing love and making others smile.</button>
                        <button className="btn btn-custom w-75 mt-3">Exploring the unknown and trying new things.</button>
                        <button className="btn btn-custom w-75 mt-3 mb-3">Achieving a goal or milestone.</button>
                        <div className="d-flex justify-content-between mt-5 w-75">
                            <button className="btn btn-custom" onClick={PrevQuestion}>Prev</button>
                            <button className="btn btn-custom" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Quiz;
