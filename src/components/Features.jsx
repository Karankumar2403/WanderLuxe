import React from 'react';
import { Shield, Plane, Gem, HeartHandshake } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield size={32} color="#D4AF37" />,
      title: 'Secure Bookings',
      desc: 'Top-tier encryption to ensure your luxury experiences are booked safely.'
    },
    {
      icon: <Gem size={32} color="#D4AF37" />,
      title: 'Premium Stays',
      desc: 'Handpicked 5-star accommodations that redefine hospitality.'
    },
    {
      icon: <Plane size={32} color="#D4AF37" />,
      title: 'Private Charters',
      desc: 'Exclusive jet and yacht options for seamless global travel.'
    },
    {
      icon: <HeartHandshake size={32} color="#D4AF37" />,
      title: '24/7 Concierge',
      desc: 'Dedicated luxury advisors available around the clock.'
    }
  ];

  return (
    <section id="experiences" className="section bg-secondary">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-lg">Why Choose <span className="text-gradient">WanderLuxe</span></h2>
          <p className="text-secondary" style={{maxWidth: '600px', margin: '0 auto'}}>Elevating your journey beyond the ordinary.</p>
        </div>
        
        <div className="grid grid-cols-4 md-grid-cols-2 gap-8 features-grid">
          {features.map((item, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon glass">
                {item.icon}
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
