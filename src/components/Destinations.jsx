import React from 'react';
import { Star, Clock } from 'lucide-react';

const destinationsData = [
  {
    id: 1,
    title: 'Bora Bora, French Polynesia',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop',
    rating: 4.9,
    duration: '7 Days',
    price: '$4,500'
  },
  {
    id: 2,
    title: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    rating: 4.8,
    duration: '5 Days',
    price: '$3,200'
  },
  {
    id: 3,
    title: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop',
    rating: 4.9,
    duration: '10 Days',
    price: '$5,100'
  },
  {
    id: 4,
    title: 'Swiss Alps, Switzerland',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop',
    rating: 5.0,
    duration: '6 Days',
    price: '$4,800'
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Trending <span className="text-gradient">Destinations</span></h2>
          <p className="text-secondary">Discover our most sought-after luxury experiences.</p>
        </div>
        
        <div className="grid grid-cols-4 md-grid-cols-2 lg-grid-cols-2 gap-6 destination-grid">
          {destinationsData.map((dest) => (
            <div key={dest.id} className="destination-card glass-card">
              <div className="card-image">
                <img src={dest.image} alt={dest.title} />
                <div className="card-badge">Premium</div>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>{dest.title}</h3>
                  <div className="rating">
                    <Star size={14} color="#D4AF37" fill="#D4AF37" />
                    <span>{dest.rating}</span>
                  </div>
                </div>
                <div className="card-bottom">
                  <div className="duration">
                    <Clock size={14} />
                    <span>{dest.duration}</span>
                  </div>
                  <div className="price">{dest.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
