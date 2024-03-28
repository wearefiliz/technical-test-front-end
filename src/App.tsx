import React from 'react';
import './App.css'; // Styles globaux de l'application

// Importation des composants créés
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import OurValuesSection from './components/OurValuesSection/OurValuesSection';
import ReservationSection from './components/ReservationSection/ReservationSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <OurValuesSection />
      <ReservationSection />
    </div>
  );
}

export default App;
