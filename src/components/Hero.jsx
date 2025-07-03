import React from 'react'

function Hero() {
  return (
    <>
       <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1>Welcome to University Feedback Portal</h1>
                <p>Your voice matters! Help us improve your university experience.</p>
                <div className="cta-buttons">
                    <button className="primary-btn login-trigger">Submit Feedback</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero;