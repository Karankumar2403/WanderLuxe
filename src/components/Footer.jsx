import React from 'react';
import { Compass, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid grid grid-cols-4 md-grid-cols-2 gap-8">
          <div className="footer-brand">
            <a href="#" className="logo">
              <Compass className="logo-icon" size={32} />
              <span className="logo-text">Wander<span className="text-gradient">Luxe</span></span>
            </a>
            <p className="text-secondary footer-desc">
              Curating unparalleled travel experiences for the modern explorer. Redefine luxury with every journey.
            </p>
            <div className="social-links flex gap-4">
              <a href="#" className="glass"><Mail size={18} /></a>
              <a href="#" className="glass"><Phone size={18} /></a>
              <a href="#" className="glass"><MapPin size={18} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Destinations</h3>
            <ul>
              <li><a href="#">Maldives</a></li>
              <li><a href="#">Swiss Alps</a></li>
              <li><a href="#">Bora Bora</a></li>
              <li><a href="#">Kyoto</a></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <p className="text-secondary">Subscribe for exclusive luxury travel updates.</p>
            <div className="newsletter-form flex">
              <input type="email" placeholder="Email address" className="glass-input" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="text-secondary">&copy; {new Date().getFullYear()} WanderLuxe. All rights reserved.</p>
          <div className="legal-links flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
