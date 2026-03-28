import { useEffect, useRef, useState } from "react";

export const Service = () => {
    // Service carte
    const services = [
        {
            icon: "fa-solid fa-heart-pulse",
            titre: "Cardiologie",
            desc: "Suivi et traitement des maladies cardiovasculaires avec des équipements de pointe.",
        },
        {
            icon: "fa-solid fa-brain",
            titre: "Neurologie",
            desc: "Diagnostic et prise en charge des troubles du système nerveux central et périphérique.",
        },
        {
            icon: "fa-solid fa-bone",
            titre: "Orthopédie",
            desc: "Traitement des affections musculo-squelettiques, fractures et rééducation.",
        },
        {
            icon: "fa-solid fa-baby",
            titre: "Pédiatrie",
            desc: "Soins spécialisés pour les nourrissons, enfants et adolescents.",
        },
        {
            icon: "fa-solid fa-eye",
            titre: "Ophtalmologie",
            desc: "Examens et traitements pour la vue, chirurgie laser et suivi ophtalmologique.",
        },
        {
            icon: "fa-solid fa-truck-medical",
            titre: "Urgences 24h/24",
            desc: "Un service d'urgence disponible à toute heure pour répondre à toute situation critique.",
        },
    ];

    return (
        <section id="service" className="py-16 bg-base-100">

            {/* En-tête de section */}
            <div className="text-center mb-20 px-4">
                <span className="badge badge-primary badge-outline mb-8 text-sm uppercase tracking-widest">
                    Nos Services
                </span>
                <h2 className="text-4xl font-bold mb-4">
                    Des soins de qualité,{" "}
                    <span className="text-blue-500">à votre service</span>
                </h2>
                <p className="text-2xl text-base-content/70 max-w-xl mx-auto">
                    SantePlus met à votre disposition une équipe médicale expérimentée et
                    des équipements modernes pour vous offrir les meilleurs soins.
                </p>
            </div>


            {/* Layout image + texte */}
            <div className="flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20 mb-16">
                {/* Image */}
                <div className="lg:w-1/2 w-full">
                    <img
                        src="/hop18.jpg"
                        alt="Médecin avec patient"
                        className="rounded-2xl shadow-xl w-full object-cover max-h-[480px]"
                    />
                </div>


                {/* Texte */}
                <div className="lg:w-1/2 w-full">
                    <h3 className="text-5xl font-bold mb-15">
                        Une prise en charge{" "}
                        <span className="text-blue-500">personnalisée</span>
                    </h3>
                    <p className="text-2xl text-base-content/70 mb-6 leading-relaxed">
                        Chez SantéPlus, chaque patient est unique. Nos équipes médicales
                        s'engagent à offrir une écoute attentive, un diagnostic précis et
                        un suivi rigoureux pour garantir votre guérison et votre bien-être.
                    </p>
                    <ul className="space-y-3 mb-8 mt-10">
                        {[
                            "Équipe médicale certifiée et expérimentée",
                            "Matériel médical de dernière génération",
                            "Rendez-vous rapides et suivi en ligne",
                            "Urgences disponibles 24h/24 et 7j/7",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-2 text-base-content/80">
                                <i className="fa-solid fa-circle-check text-blue-500 text-lg shrink-0"></i>
                                {item}
                            </li>
                        ))}

                        {/* Bouton de rendez-vous */}
                    </ul>
                    <a href="#" className="btn btn-primary px-8 mt-10">
                        <i className="fa-solid fa-calendar-check mr-2"></i>
                        Prendre rendez-vous
                    </a>
                </div>
            </div>

            {/* Cartes de services avec animation au scroll */}
            <div className="px-6 lg:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <AnimatedCard key={service.titre} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Composant carte avec animation au scroll
// Type service
type ServiceItem = {
    icon: string;
    titre: string;
    desc: string
};

const AnimatedCard = ({ service, index }: { service: ServiceItem; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Délai progressif selon l'index de la carte
                    setTimeout(() => setVisible(true), index * 120);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [index]);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${index * 80}ms` }}
            className={`card bg-base-100 shadow hover:shadow-xl hover:-translate-y-4 transition-all duration-500 
                ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
        >
            {/* Style de la carte */}
            <div className="card-body w-80">
                <div className="w-20 h-20 rounded-xl bg-blue-200 flex items-center justify-center mb-3">
                    <i className={`${service.icon} text-blue-500 text-xl`}></i>
                </div>
                <h4 className="card-title text-3xl">{service.titre}</h4>
                <p className="text-base-content/70 text-sm">{service.desc}</p>
            </div>
        </div>
    );
};
