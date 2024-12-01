import React, { useEffect, useState } from "react";
import Navbar from "../Compenents/Navbar";

function Result() {
    const [points, setPoints] = useState(0); // เก็บคะแนนจาก localStorage
    const [animal, setAnimal] = useState(""); // เก็บผลลัพธ์สัตว์ที่คำนวณได้

    useEffect(() => {
        // ดึงคะแนนจาก localStorage
        const storedPoints = parseInt(localStorage.getItem("point"), 10) || 0;
        setPoints(storedPoints);

        // คำนวณว่าเราได้สัตว์อะไร
        if (storedPoints >= 97) setAnimal("Rabbit");
        else if (storedPoints >= 93) setAnimal("Bear");
        else if (storedPoints >= 90) setAnimal("Shark");
        else if (storedPoints >= 87) setAnimal("Owl");
        else if (storedPoints >= 83) setAnimal("Snake");
        else if (storedPoints >= 80) setAnimal("Fox");
        else if (storedPoints >= 77) setAnimal("Cat");
        else if (storedPoints >= 73) setAnimal("Golden Retriever");
        else if (storedPoints >= 69) setAnimal("Lion");
        else if (storedPoints >= 65) setAnimal("Dolphin");
        else if (storedPoints >= 60) setAnimal("Wolf");
        else if (storedPoints >= 55) setAnimal("Elephant");
        else if (storedPoints >= 50) setAnimal("Hawk");
        else setAnimal("Neutral");
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-center mt-5 mb-5">You are a {animal}!</h1>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-body text-center">
                                <p>Your total points: {points}</p>
                                {animal !== "Neutral" && (
                                    <img src={`/images/${animal}.png`} alt={animal}className="img-fluid mt-4"/>
                                )}
                                {animal === "Neutral" && (
                                    <p className="mt-4">
                                        Unfortunately, your points are too low to match an animal. Better luck next time!
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Result;
