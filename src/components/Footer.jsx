import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <p>Email: feedback@university.edu</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">FAQs</a>
                    </div>
                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 University Feedback System. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer