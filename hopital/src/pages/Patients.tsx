import { useState } from "react";

export const Patients = () => {

    // Étapes du parcours patient
    const etapes = [
        {
            num: "01",
            icon: "fa-solid fa-calendar-check",
            titre: "Prise de rendez-vous",
            desc: "Prenez rendez-vous en ligne ou par téléphone. Vous recevrez une confirmation par SMS ou email.",
        },
        {
            num: "02",
            icon: "fa-solid fa-file-medical",
            titre: "Préparation à la visite",
            desc: "Apportez votre carte vitale, ordonnance et résultats d'analyses. Arrivez 10 minutes avant.",
        },
        {
            num: "03",
            icon: "fa-solid fa-stethoscope",
            titre: "Consultation médicale",
            desc: "Rencontrez votre médecin dans un environnement calme, à l'écoute de vos besoins.",
        },
        {
            num: "04",
            icon: "fa-solid fa-circle-check",
            titre: "Suivi & accompagnement",
            desc: "Recevez votre ordonnance et votre compte-rendu. Un suivi personnalisé est mis en place.",
        },
    ];

    // Questions fréquentes (FAQ)
    const faqs = [
        {
            q: "Quels documents apporter à ma première consultation ?",
            r: "Carte vitale, pièce d'identité, carte de mutuelle et si possible les résultats d'examens antérieurs.",
        },
        {
            q: "Quels sont les horaires de visite pour les patients hospitalisés ?",
            r: "Les visites sont autorisées du lundi au dimanche de 10h à 12h et de 14h à 20h. Les enfants de moins de 12 ans sont acceptés avec un adulte.",
        },
        {
            q: "Comment annuler ou modifier un rendez-vous ?",
            r: "Appelez notre standard au 01 23 45 67 89 au moins 24h à l'avance ou connectez-vous à votre espace patient en ligne.",
        },
        {
            q: "Puis-je venir aux urgences sans rendez-vous ?",
            r: "Oui, nos urgences sont ouvertes 24h/24 et 7j/7 sans rendez-vous. En cas de danger immédiat, appelez le 15 (SAMU).",
        },
    ];

    // État pour la FAQ accordion (index de la question ouverte, ou null)
    const [ouvert, setOuvert] = useState<number | null>(null);

    return (
        <section id="patients" className="py-20 bg-white">

            {/* ── EN-TÊTE ── */}
            <div className="text-center mb-16 px-6">
                <span className="badge badge-primary badge-outline mb-3 text-sm uppercase tracking-widest">
                    Patients & Visiteurs
                </span>
                <h2 className="text-6xl font-bold mb-4 mt-5">
                    Votre bien-être,{" "}
                    <span className="text-blue-500">notre priorité</span>
                </h2>
                <p className="text-base-content/60 max-w-lg mx-auto mt-10 text-1xl">
                    De la prise de rendez-vous au suivi post-consultation, nous vous
                    accompagnons à chaque étape de votre parcours de soins.
                </p>
            </div>

            {/* ── IMAGE + INFOS PRATIQUES ── */}
            <div className="flex flex-col lg:flex-row items-stretch gap-0 mb-20 px-6 lg:px-20">

                {/* Image */}
                <div className="lg:w-1/2 w-full">
                    <img
                        src="/hop19.jpg"
                        alt="Patiente souriante"
                        className="w-full h-full object-cover rounded-2xl lg:rounded-r-none lg:rounded-l-2xl shadow-lg"
                        style={{ minHeight: "380px", maxHeight: "500px" }}
                    />
                </div>

                {/* Infos pratiques */}
                <div className="lg:w-1/2 w-full bg-blue-700 text-white rounded-2xl lg:rounded-l-none lg:rounded-r-2xl p-8 flex flex-col justify-center gap-5">
                    <h3 className="text-5xl font-bold mb-10">Informations pratiques</h3>

                    {[
                        {
                            icon: "fa-solid fa-clock",
                            label: "Horaires ouverture",
                            valeur: "Lun – Ven : 8h00 – 20h00 | Sam : 9h00 – 17h00"
                        },


                        {
                            icon: "fa-solid fa-location-dot",
                            label: "Adresse",
                            valeur: "12 Avenue de la Santé,  05 Koumassi - Côte d'Ivoire"
                        },


                        {
                            icon: "fa-solid fa-phone",
                            label: "Standard",
                            valeur: "05 02 16 57 36"
                        },


                        {
                            icon: "fa-solid fa-truck-medical",
                            label: "Urgences",
                            valeur: "24h/24 – 7j/7 — Sans rendez-vous"
                        },


                        {
                            icon: "fa-solid fa-car",
                            label: "Parking",
                            valeur: "Parking gratuit sur place — 200 places"
                        },


                    ].map((item) => (
                        <div key={item.label} className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                                <i className={`${item.icon} text-white`}></i>
                            </div>
                            <div>
                                <p className="text-white/70 text-xs uppercase tracking-widest">{item.label}</p>
                                <p className="font-medium leading-snug">{item.valeur}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── PARCOURS PATIENT ── */}
            <div className="px-6 lg:px-20 mb-20">
                <h3 className="text-5xl font-bold text-center mb-20">
                    Votre <span className="text-blue-500">parcours patient</span> en 4 étapes
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {etapes.map((e) => (
                        <div key={e.num} className="relative card bg-base-100 border border-base-200 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

                            {/* Numéro en arrière-plan */}
                            <span className="absolute top-3 right-4 text-5xl font-black text-blue-50 select-none">{e.num}</span>
                            <div className="card-body">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-3">
                                    <i className={`${e.icon} text-blue-500 text-5xl`}></i>
                                </div>
                                <h4 className="font-bold text-2xl">{e.titre}</h4>
                                <p className="text-base-content/70 text-sm">{e.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── FAQ ── */}
            <div className="px-6 lg:px-20 mb-20">
                <h3 className="text-5xl font-bold text-center mb-10">
                    Questions <span className="text-blue-500">fréquentes</span>
                </h3>

                <div className="max-w-3xl mx-auto flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-base-200 rounded-xl overflow-hidden shadow-sm">

                            {/* Question cliquable */}
                            <button
                                onClick={() => setOuvert(ouvert === i ? null : i)}
                                className="text-3xl w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-base-content hover:bg-blue-50 transition-colors duration-200"
                            >
                                <span>{faq.q}</span>
                                <i className={`fa-solid fa-chevron-down text-blue-400 transition-transform duration-300 ${ouvert === i ? "rotate-180" : ""}`}></i>
                            </button>

                            {/* Réponse (visible si ouverte) */}
                            {ouvert === i && (
                                <div className="text-2xl px-10 pb-2 text-base-content/70 leading-relaxed">
                                    {faq.r}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* ── BANNIÈRE URGENCE ── */}
            <div className="mx-6 lg:mx-20 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg">
                <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0 animate-pulse">
                        <i className="fa-solid fa-phone-volume text-white text-2xl"></i>
                    </div>
                    <div>
                        <p className="text-white/80 text-2xl mb-1">Ligne d'urgence — disponible 24h/24 et 7j/7</p>
                        <p className="mt-5 text-3xl font-black tracking-wide">+225 0502165736</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:+225 0502165736" className="btn bg-white text-blue-600 hover:bg-blue-50 font-semibold border-none">
                        <i className="fa-solid fa-phone mr-2"></i> Appeler maintenant
                    </a>
                    <a href="#" className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
                        <i className="fa-solid fa-calendar-check mr-2"></i> Prendre RDV
                    </a>
                </div>
            </div>

        </section>
    );
};
