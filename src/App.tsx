import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li><a href="#qui-sommes-nous">Qui sommes-nous ?</a></li>
            <li><a href="#nos-valeurs">Nos valeurs</a></li>
            <li><a href="#reservez">Réservez !</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
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

      {/* Qui sommes-nous ? */}
      <section className="about-us">
        <div className="about-us-content">
          <img src="/images/image-about-us.png" alt="Qui sommes-nous ?" />
          <div className="text-content">
            <h1>Qui sommes-nous ?</h1>
            <p>Bienvenue chez Café Neko, l'endroit où le café et les chats se rencontrent pour créer une expérience unique en son genre.</p>
            <p>Chez Café Neko, nous sommes passionnés par deux choses : le café de qualité et le bien-être des chats. Fondé par des amoureux des félins et des aficionados du café, Café Neko est bien plus qu'un simple café. C'est un refuge pour les amoureux des chats, un havre de paix où l'on peut savourer une bonne tasse de café tout en câlinant nos adorables résidents à quatre pattes.</p>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="our-values" style={{ backgroundColor: "#F9F9F9" }}>
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

      {/* Réservation */}
      <section className="book-your-table" style={{ backgroundColor: "#f3f0ea" }}>
        <div className="container">
          <div className="left-section">
            <h1>Réservez Votre Table !</h1>
            <p>Réservez dès maintenant votre table pour une expérience caféinée inoubliable en compagnie de nos adorables chats. Plongez dans l'ambiance apaisante de Café Chatouille et laissez-vous séduire par nos délices caféinés et nos compagnons félins. Réservez dès aujourd'hui et préparez-vous à vivre un moment magique de détente et de plaisir.</p>
          </div>
          <div className="right-section">
            <form>
                <div className="form-row half">
                    <div className="half">
                      <label htmlFor="nom">Nom*</label>
                      <input type="text" id="nom" name="nom" />
                    </div>
                    <div className="half">
                      <label htmlFor="prenom">Prénom*</label>
                      <input type="text" id="prenom" name="prenom" />
                    </div>
                </div>
                <div className="form-row half">
                    <div className="half">
                      <label htmlFor="telephone">N° de téléphone*</label>
                      <input type="tel" id="telephone" name="telephone" />
                    </div>
                    <div className="half">
                      <label htmlFor="email">Adresse email*</label>
                      <input type="email" id="email" name="email" />
                    </div>
                </div>
            </form>
            <div className="button-container">
              <button className="cta-btn">Réserver</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


export default App;
