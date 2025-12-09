import React from 'react'
import { BsBuildingsFill } from "react-icons/bs";
import { MdCoffeeMaker } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { TbToolsOff } from "react-icons/tb";
import Image from 'next/image';

export default function About() {
  return (
    <>
    <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Mission Library?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Extensive Book Collection</h3>
              <p>
                Access to competitive books for UPSC, SSC, Banking, Railway, and
                all major exams.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Proven Success Record</h3>
              <p>
                Join hundreds of successful students who achieved their goals
                with us.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>24x7 Open Study Hall</h3>
              <p>Study anytime, anywhere with our round-the-clock facility.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Weekly Mock Tests</h3>
              <p>
                Regular testing to track your progress and improve performance.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>High-Speed Wi-Fi</h3>
              <p>
                Seamless internet connectivity for online research and study
                materials.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h3>Expert Guidance</h3>
              <p>
                Get mentorship from selected officers and experienced
                professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
