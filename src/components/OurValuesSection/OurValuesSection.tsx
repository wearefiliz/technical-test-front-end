import React from 'react';
import './OurValuesSection.css';

function OurValuesSection() {
  return (
    <section className="our-values">
      <div className="container">
        <div className="value-container" style={{ backgroundColor: "#fff" }}>
          <img src="icons/coffee-icon.svg" alt="Coffee Icon" />
          <h2>Passionné de Café</h2>
          <p>Notre équipe est passionnée par l'art de préparer le café. Chaque grain est soigneusement sélectionné pour offrir une expérience gustative exceptionnelle. Nous nous engageons à vous offrir des saveurs riches et uniques dans chaque tasse.</p>
        </div>
      </div>
      <div className="container">
        <div className="value-container" style={{ backgroundColor: "#fff" }}>
          <img src="icons/cat-icon.svg" alt="Coffee Icon" />
          <h2>Bien-être des Chats</h2>
          <p>Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. Nous offrons un environnement sûr et confortable à nos chats résidents, où ils peuvent interagir avec nos clients et recevoir toute l'attention et l'affection qu'ils méritent.</p>
        </div>
      </div>
      <div className="container">
        <div className="value-container" style={{ backgroundColor: "#fff" }}>
          <img src="icons/plant-icon.svg" alt="Coffee Icon" />
          <h2>Engagement Environnemental</h2>
          <p>Nous sommes soucieux de l'impact environnemental de notre entreprise. C'est pourquoi nous nous engageons à utiliser des produits respectueux de l'environnement et à promouvoir des pratiques durables dans tous les aspects de notre activité, de la sélection des fournisseurs à la gestion des déchets.</p>
        </div>
      </div>
    </section>
  );
}

export default OurValuesSection;
