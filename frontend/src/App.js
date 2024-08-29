import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="help-center">
      <header className="header">
        <div className="logo">Abstract | Help Center</div>
        <button className="submit-request">Submit a request</button>
      </header>
      <center>
      <main className="main-content">
        <h1 className="heading">How can we help?</h1>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">→</button>
        </div>

        <div className="card-grid">
          <div className="card">
            <h2>Branches</h2>
            <p>Abstract Branches lets you manage, version, and document your designs in one place.</p>
          </div>
          <div className="card">
            <h2>Manage your account</h2>
            <p>Configure your account settings, such as your email, profile details, and password.</p>
          </div>
          <div className="card">
            <h2>Manage organizations, teams, and projects</h2>
            <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
          </div>
          <div className="card">
            <h2>Manage billing</h2>
            <p>Change subscriptions and payment details.</p>
          </div>
          <div className="card">
            <h2>Authenticate to Abstract</h2>
            <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
          </div>
          <div className="card">
            <h2>Abstract support</h2>
            <p>Get in touch with a human.</p>
          </div>
        </div>
      </main></center>

      <footer className="footer">
        <div className="footer-section">
          <h4>Abstract</h4>
          <ul>
            <li>Branches</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Notes</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Dribbble</li>
            <li>Podcast</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
