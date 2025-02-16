// import React from 'react'
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="main-container">
      <div className="footer-icons">
        {/* icons */}
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
        <XIcon />
      </div>
      <div className="footer-container">
        <div>
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notice</p>
        </div>

        <div>
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </div>

        <div>
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </div>

        <div>
          <p>Media Center</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="footer-service">
        <p>Service Code</p>
      </div>
      <div className="footer-info">
        <p>© 1997-2025 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
