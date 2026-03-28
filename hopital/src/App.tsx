import { useState, useEffect } from 'react';
import './App.css'
import { Menu } from "./pages/Menu";
import { Service } from "./pages/Service";
import { Patients } from "./pages/Patients";
import Footer from "./pages/Footer";
import { Medecins } from "./pages/Medecins";
import { Urgence } from "./pages/Urgence";
import { Contact } from "./pages/Contact";

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    // Vérification du chargement au clic sur le menu
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Menu masque sur la pge Urgence
  if (hash === '#urgence') {
    return (
      <div className="flex flex-col min-h-screen">
        <Menu />
        <div className="grow">
          <Urgence />
        </div>
        <Footer />
      </div>
    );
  }

  // Si on est sur la page des médecins
  if (hash === '#medecins') {
    return (
      <div className="flex flex-col min-h-screen">
        <Menu />
        <div className="grow">
          <Medecins />
        </div>
        <Footer />
      </div>
    );
  }

  // Si on est sur la page de contact
  if (hash === '#contact') {
    return (
      <div className="flex flex-col min-h-screen">
        <Menu />
        <div className="grow">
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Menu />
      {/* Partie Texte d'Accueil hôpital extraite de Menu */}
      <div className="hero min-h-[62vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Bienvenue à l'Hôpital <span className="text-blue-500">santePlus</span></h1>
            <p className="py-10 text-2xl">Nous sommes là pour prendre soin de vous, pour une santé meilleure.</p>
            <button className="btn btn-primary text-1xl">Prendre rendez-vous</button>
          </div>
        </div>
      </div>
      <Service />
      <Patients />
      <Footer />
    </>
  )
}

export default App
