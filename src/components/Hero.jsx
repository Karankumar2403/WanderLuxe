import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <div className="badge glass">
            <MapPin size={16} color="#D4AF37" />
            <span>Discover the Unseen</span>
          </div>
          <h1 className="heading-xl">
            Redefine Your <br />
            <span className="text-gradient">Journey</span>
          </h1>
          <p className="hero-subtext">
            Experience the world's most exclusive destinations with unparalleled luxury and curated itineraries designed just for you.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Explore Destinations <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
          </div>
        </div>
        
        <div className="hero-search glass-card">
          <div className="search-field">
            <label>Location</label>
            <input type="text" placeholder="Where to?" />
          </div>
          <div className="search-field">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="search-field">
            <label>Guests</label>
            <select>
              <option>1-2 Guests</option>
              <option>3-5 Guests</option>
              <option>6+ Guests</option>
            </select>
          </div>
          <button className="btn btn-primary search-btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
