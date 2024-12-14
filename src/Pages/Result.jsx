import React, { useEffect, useState } from "react";
import Navbar from "../Compenents/Navbar";
import animals from "./animals";

function Result() {
    const [points, setPoints] = useState(0); // เก็บคะแนนจาก localStorage
    const [animalKey, setAnimalKey] = useState(""); // เก็บคีย์สัตว์ที่คำนวณได้ เช่น 'fox', 'snake'

    useEffect(() => {
        // ดึงคะแนนจาก localStorage
        const storedPoints = parseInt(localStorage.getItem("point"), 10) || 0;
        setPoints(storedPoints);

        // คำนวณว่าเราได้สัตว์อะไร
        if (storedPoints >= 101) setAnimalKey("Rabbit");
        else if (storedPoints >= 81) setAnimalKey("Owl");
        else if (storedPoints >= 61) setAnimalKey("Fox");
        else if (storedPoints >= 51) setAnimalKey("Snake");
        else if (storedPoints >= 41) setAnimalKey("Bear");
        else if (storedPoints >= 31) setAnimalKey("GoldenRetriever");
        else setAnimalKey("Cat");
    }, []);

    const animal = animals[animalKey]; // ดึงข้อมูลสัตว์จาก key

    return (
        <>
            <Navbar />
            <div className="d-flex flex-column align-items-center justify-content-center position-relative"
            style={{minHeight: "100vh", backgroundImage: "url('/bg.png')", backgroundSize: "cover",backgroundPosition: "center"}}>
                <div className="w-75">
                    <div className="card bg-white bg-opacity-75 shadow-lg" style={{ maxHeight: "90vh", overflowY: "auto" }}>
                        <div className="card-body text-center">
                            <h1 className="text-center mt-3 mb-3">You are a {animal?.name}!</h1>
                            <p>Your total points: {points}</p>
                            {animal && (
                                <>
                                    <img src={`/${animalKey}.png`} alt={animal.name}className="img-fluid mb-3"
                                    style={{maxWidth: "100%", maxHeight: "400px", objectFit: "cover"}}/>
                                    <p>{animal.description}</p>
                                    <h5 className="mt-4 text-start">Areas for Improvement:</h5>
                                    <ul className="text-start">
                                        {animal.improvement.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <h5 className="mt- text-start">Suggestions for Growth:</h5>
                                    <ul className="text-start">
                                        {animal.suggestionsForGrowth.map((suggestion, index) => (
                                            <li key={index}>{suggestion}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Result;
