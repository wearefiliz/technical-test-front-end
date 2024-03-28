import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1> Bienvenue <br />chez Café Neko</h1>
        <h2>L'endroit où le café rencontre les ronronnements</h2>
        <p>Bienvenue dans notre univers où chaque tasse de café est accompagnée d'une dose d'amour félin.</p>
        <button className="cta-btn">Nous contacter</button>
      </div>
      <div className="hero-image">
        <img src="/images/cat-hero-section.png" alt="Cat Hero" />
      </div>
    </div>
  );
}

export default HeroSection;
