import React from "react";
import Logo from "../assets/Brown_Pastel_Dimsum_Food_Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css"
function Footer() {
    return (
        <section className="footer">
            <div className="footer-content">
                <img src={Logo} alt="Logo" />
                <p>Get your tastebuds fixed with Wild West Eats!</p>
                
                <div className="icons">
                    <a href="#"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                    
                </div>
            </div>  
            
            <div className="footer-content">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Reservation</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
            </div>
            
            <div className="footer-content">
                <h4>Inquiries</h4>
                <ul>
                    <li><a href="#">Singapore Polytechnic, Dover 500</a></li>
                    <li><a href="#">+65 88350446</a></li>
                    <li><a href="#">info@example.com</a></li>
                </ul>
            </div>
            
            <div className="footer-content">
                <h4>Opening</h4>
                <ul>
                    <li><a href="#">Monday - Sunday</a></li>
                    <li><a href="#">10AM-10PM</a></li>
                </ul>
            </div>
            
            <div className="footer-content">
                <h4>Subscribe</h4>
                <div className="subscribe-form">
                    <div className="input-with-button">
                        <input type="text" placeholder="Your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Footer