import { useState } from "react";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Partie Menu */}
      <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50">

        {/* Logo */}
        <div className="navbar-start">
          <a href="#" className="flex items-center gap-2">
            <img src="favicon.ico" alt="Hôpital" className="h-15 w-15 object-contain" />
            <span className="text-3xl font-bold text-blue-500 hidden sm:block">santePlus</span>
          </a>
        </div>

        {/* Liens desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 px-1 text-base font-medium">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                <i className="fa-solid fa-house mr-1"></i> Accueil
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                <i className="fa-solid fa-stethoscope mr-1"></i> Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                <i className="fa-solid fa-users mr-1"></i> Patients & Visiteurs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                <i className="fa-solid fa-user-doctor mr-1"></i> Nos Médecins
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                <i className="fa-solid fa-envelope mr-1"></i> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Bouton Urgences + Hamburger mobile */}
        <div className="navbar-end flex items-center gap-2">
          <a href="#" className="btn btn-error btn-sm text-white font-semibold hidden lg:flex gap-1">
            <i className="fa-solid fa-truck-medical"></i> Urgences
          </a>

          {/* Menu Hamburger */}
          <div className="relative lg:hidden">
            <button
              className="btn btn-ghost btn-square"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Ouvrir le menu"
            >
              <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
            </button>
            {menuOpen && (
              <ul className="absolute right-0 top-12 w-56 bg-base-100 shadow-lg rounded-box p-2 flex flex-col gap-1 font-medium z-50">
                <li>
                  <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-base-200"><i className="fa-solid fa-house"></i> Accueil</a>
                </li>

                <li><a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-base-200"><i className="fa-solid fa-stethoscope"></i> Services</a>
                </li>

                <li><a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-base-200"><i className="fa-solid fa-users"></i> Patients &amp; Visiteurs</a>
                </li>
                <li><a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-base-200"><i className="fa-solid fa-envelope"></i> Contact</a>
                </li>

                <li className="border-t border-base-200 mt-1 pt-1">
                  <a href="#" className="flex items-center gap-2 p-2 rounded text-error font-semibold hover:bg-error hover:text-white transition-colors">
                    <i className="fa-solid fa-truck-medical"></i> Urgences</a>
                </li>
              </ul>
            )}
          </div>
        </div>

      </div>

      {/* Partie Texe d'Accueil */}
      <div className="hero min-h-[50vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Bienvenue à l'Hôpital <span className="text-blue-500">santePlus</span></h1>
            <p className="py-10 text-1xl">Nous sommes là pour prendre soin de vous, pour une santé meilleure.</p>
            <button className="btn btn-primary">Prendre rendez-vous</button>
          </div>
        </div>
      </div>
    </>
  );
};
