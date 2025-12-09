import React from 'react'

export default function Servicelucation() {
  return (
    <>
    <section id="facilities" className="facilities">
        <div className="container">
          <h2 className="section-title">World-Class Facilities</h2>
          <ul className="facilities-list">
            <li>
              <span className="check-icon">✓</span>
              <span>
                <strong>Peaceful Environment for Self Study</strong> -
                Distraction-free zone for maximum concentration
              </span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>
                <strong>Weekly Mock Tests</strong> - Regular practice with
                detailed analysis and feedback
              </span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>
                <strong>24x7 Open Study Hall</strong> - Study at your
                convenience, any time of day or night
              </span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>
                <strong>Competitive Books Available</strong> - Latest editions
                for all competitive exams
              </span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>
                <strong>High-Speed Wi-Fi Connectivity</strong> - Uninterrupted
                internet for research and study
              </span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>
                <strong>Guidance by Selected Officers</strong> - Learn from
                successful exam qualifiers
              </span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>
                <strong>CCTV Camera Surveillance</strong> - Complete security
                for your peace of mind
              </span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>
                <strong>RO Water Facility</strong> - Clean drinking water
                available throughout
              </span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>
                <strong>Daily Newspapers & Magazines</strong> - Hindi-English
                newspapers for current affairs
              </span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>
                <strong>Personal Cabin</strong> - Private study space with
                chair, charging point & light
              </span>
            </li>
          </ul>
        </div>
      </section>

         <section id="contact" className="contact">
        <div className="contact-content">
          <h2 className="section-title" style={{ color: "white" }}>
            Get In Touch
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Visit us today and start your journey to success!
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <h4>📍 Location</h4>
              <p>
                Near Forest Checknaka,<spam>Beside Mahi Vastralaya,</spam>
                Chhattarpur
              </p>
            </div>
            <div className="contact-item">
              <h4>👨‍💼 Director</h4>
              <p>
                <strong>Vikash Kumar</strong>
              </p>
              <p>📞 7782980891</p>
              <p>📞 6200210046</p>
            </div>
            <div className="contact-item">
              <h4>⏰ Opening Hours</h4>
              <p>
                <strong>24x7 Open</strong>
              </p>
              <p>All Days of the Week</p>
            </div>
          </div>

          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              background: " rgba(255,255,255,0.1)",
              borderRadius: "15px",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 style={{ color: "#ffd700", marginBottom: "1rem" }}>
              🎊 Special Offer!
            </h3>
            <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
              FREE REGISTRATION FOR FIRST 30 STUDENTS
            </p>
            <p style={{ marginTop: "1rem" }}>
              Limited time offer - Don't miss this opportunity!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
