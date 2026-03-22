const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">

            {/* ── CORPS DU FOOTER ── */}
            <div className="px-6 lg:px-20 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Colonne 1 — Identité */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img src="/favicon.svg" alt="Logo" className="h-8 w-8" />
                        <span className="text-white text-xl font-bold">santéPlus</span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Votre hôpital de confiance à Koumassi, Abidjan. Des soins de qualité,
                        un accompagnement humain, 24h/24 et 7j/7.
                    </p>
                    {/* Réseaux sociaux */}
                    <div className="flex gap-3 mt-5">
                        {[
                            { icon: "fa-brands fa-facebook-f", href: "#" },
                            { icon: "fa-brands fa-twitter", href: "#" },
                            { icon: "fa-brands fa-instagram", href: "#" },
                            { icon: "fa-brands fa-linkedin-in", href: "#" },
                        ].map((r) => (
                            <a
                                key={r.icon}
                                href={r.href}
                                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-colors duration-200"
                            >
                                <i className={`${r.icon} text-white text-sm`}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Colonne 2 — Navigation */}
                <div>
                    <h4 className="text-white font-semibold mb-4 uppercase tracking-widest text-xs">
                        Navigation
                    </h4>
                    <ul className="space-y-2 text-sm">
                        {["Accueil", "Nos Services", "Patients & Visiteurs", "Médecins", "Contact"].map((lien) => (
                            <li key={lien}>
                                <a
                                    href="#"
                                    className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
                                >
                                    <i className="fa-solid fa-chevron-right text-blue-500 text-xs"></i>
                                    {lien}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Colonne 3 — Services */}
                <div>
                    <h4 className="text-white font-semibold mb-4 uppercase tracking-widest text-xs">
                        Nos Spécialités
                    </h4>
                    <ul className="space-y-2 text-sm">
                        {["Cardiologie", "Neurologie", "Orthopédie", "Pédiatrie", "Ophtalmologie", "Urgences"].map((s) => (
                            <li key={s}>
                                <a
                                    href="#"
                                    className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
                                >
                                    <i className="fa-solid fa-chevron-right text-blue-500 text-xs"></i>
                                    {s}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Colonne 4 — Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-4 uppercase tracking-widest text-xs">
                        Contact
                    </h4>
                    <ul className="space-y-4 text-sm">
                        {[
                            { icon: "fa-solid fa-location-dot", text: "12 Avenue de la Santé, 05 Koumassi — Côte d'Ivoire" },
                            { icon: "fa-solid fa-phone", text: "05 02 16 57 36" },
                            { icon: "fa-solid fa-envelope", text: "contact@santeplus.ci" },
                            { icon: "fa-solid fa-clock", text: "Lun – Ven : 8h00 – 20h00" },
                        ].map((c) => (
                            <li key={c.icon} className="flex items-start gap-3">
                                <i className={`${c.icon} text-blue-400 mt-0.5 shrink-0`}></i>
                                <span className="text-gray-400 leading-snug">{c.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ── BARRE DE BAS ── */}
            <div className="border-t border-white/10 py-5 px-6 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
                <p>© {new Date().getFullYear()} santéPlus — Tous droits réservés.</p>
                <div className="flex gap-5">
                    <a href="#" className="hover:text-blue-400 transition-colors">Mentions légales</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Politique de confidentialité</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;