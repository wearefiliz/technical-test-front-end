import React from 'react';
import './ReservationSection.css';

function ReservationSection() {
  return (
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
  );
}

export default ReservationSection;
