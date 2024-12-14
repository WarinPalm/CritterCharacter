import React from 'react';
import Navbar from '../Compenents/Navbar';

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="bg-cover" 
         style={{ minHeight: "100vh", backgroundImage: "url('/bg.png')", backgroundSize: "cover",  backgroundPosition: "center"}}>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="bg-white bg-opacity-75 p-5 rounded shadow-lg w-100 w-md-75 container">
            <h1 className="text-center mb-4">Introduction</h1>
            <div className="row">
              <div className="col-12 col-md-8 mx-auto">
                <p className="lead">
                  Welcome to Critter Character! Our website is a fun and engaging platform designed to help you explore your personality through the lens of unique animal characters. Whether you're a brave bear, a logical owl, or a cheerful golden retriever, every critter represents a distinct personality type with its own strengths, weaknesses, and opportunities for growth.
                </p>

                <h3 className="mt-4">How it works:</h3>
                <p>
                  Simply answer a series of fun and insightful questions, and we’ll match you with the animals that best reflect your personality. Once you discover your critter, you’ll gain personalized insights into your:
                </p>
                <ul>
                  <li><strong>Good points:</strong> Highlighting your natural strengths and abilities.</li>
                  <li><strong>Bad points:</strong> Identifying areas where you may face challenges.</li>
                  <li><strong>Opportunities to improve:</strong> Offering actionable suggestions for personal growth and success.</li>
                </ul>

                <p>
                  Critter Character is more than just a personality quiz—it’s a journey of self-discovery, reflection, and growth. Celebrate your unique traits, learn more about yourself, and take the first step toward becoming the best version of you.
                </p>

                <h3 className="mt-4">Disclaimer</h3>
                <p>
                  The content on Critter Character is intended for entertainment and educational purposes only. While our personality insights are designed to inspire curiosity and reflection, they are <strong>not</strong> substitutes for professional psychological advice or assessments.
                </p>

                <p>
                  Please remember that everyone is <strong>unique</strong>, and personality traits can <strong>vary</strong> widely. Use our suggestions and insights as lighthearted tools for growth and connection rather than fixed labels.
                </p>

                <p>
                  Thank you for visiting Critter Character! We hope you enjoy discovering and celebrating the many facets of human personality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
