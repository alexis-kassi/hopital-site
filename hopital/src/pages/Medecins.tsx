import { useEffect, useState } from "react";

type Service = string;

type Medecin = {
    id: number;
    nom: string;
    role: string;
    telephone: string;
    image: string;
    services: Service[];
};

export const Medecins = () => {
    const [medecins, setMedecins] = useState<Medecin[]>([]);

    useEffect(() => {
        // Mock data enriching the original array with roles and services
        const data: Medecin[] = [
            {
                id: 1,
                nom: "Dr Robert Dizin",
                role: "Cardiologue en chef",
                telephone: "+225 01020304",
                image: "/medecin1.jpg",
                services: ["Électrocardiogramme", "Consultation cardiaque", "Chirurgie thoracique"]
            },
            {
                id: 2,
                nom: "Dr KinZou Maroine",
                role: "Pédiatre",
                telephone: "+225 05060708",
                image: "/medecin2.jpg",
                services: ["Suivi pédiatrique", "Vaccination", "Urgences infantiles"]
            },
            {
                id: 3,
                nom: "Dr Julien Yves",
                role: "Chirurgien orthopédiste",
                telephone: "+225 07080910",
                image: "/medecin3.jpg",
                services: ["Chirurgie des os", "Traumatologie", "Rééducation"]
            },
            {
                id: 4,
                nom: "Dr Anita Deroine",
                role: "Gynécologue-Obstétricienne",
                telephone: "+225 07080910",
                image: "/medecin4.jpg",
                services: ["Suivi de grossesse", "Échographie", "Accouchement"]
            },
            {
                id: 5,
                nom: "Dr François Patrick",
                role: "Neurologue",
                telephone: "+225 07080910",
                image: "/medecin5.jpg",
                services: ["Consultation neurologique", "Traitement des migraines", "Troubles du sommeil"]
            },
            {
                id: 6,
                nom: "Dr Yvana Samloni",
                role: "Dermatologue",
                telephone: "+225 07080910",
                image: "/medecin6.jpg",
                services: ["Soins de la peau", "Traitement laser", "Dépistage"]
            },
        ];

        setMedecins(data);
    }, []);

    return (
        <section className="bg-base-200 py-20 min-h-screen">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Texte d'accueil des medecins */}
                <div className="text-center mb-16 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-primary rounded-full"></div>
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mt-6 mb-2 pt-8">Rencontrez nos experts</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-base-content mb-4 tracking-tight mt-10">Notre Équipe <span className="text-primary">Médicale</span></h1>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto mt-15">
                        Découvrez notre équipe de professionnels de la santé dévoués, hautement qualifiés et prêts à vous offrir les meilleurs soins possibles.
                    </p>
                </div>

                {/* Contenu des cartes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-30">
                    {medecins.map((medecin) => (
                        <div
                            key={medecin.id}
                            className="card bg-base-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-base-content/5 relative"
                        >
                            {/* Bande de décoration */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>

                            {/* Avatar et image */}
                            <figure className="px-6 pt-8 relative pb-4">
                                <div className="absolute top-3 right-5 bg-white shadow-md p-2 rounded-full text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
                                    <i className="fa-solid fa-stethoscope text-xl"></i>
                                </div>

                                <div className="w-50 h-50 rounded-full overflow-hidden border-4 border-base-200 group-hover:border-primary transition-colors duration-300 shadow-md relative group-hover:-translate-y-2">

                                    {/* Gestion des images */}
                                    <img
                                        src={medecin.image}
                                        alt={medecin.nom}
                                        onError={(e) => {
                                            // 
                                            (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(medecin.nom) + "&background=random&size=150";
                                        }}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                    />
                                </div>
                            </figure>

                            <div className="card-body items-center text-center pt-2 gap-4">

                                <div className="space-y-1">
                                    <h2 className="card-title text-2xl font-bold">{medecin.nom}</h2>
                                    <p className="text-primary font-semibold uppercase tracking-wide text-sm">{medecin.role}</p>
                                </div>

                                {/* Ligne de séparation douce */}
                                <div className="w-16 h-px bg-base-content/10 my-1"></div>

                                {/* Informations et Contact */}
                                <div className="flex flex-col items-center gap-2 text-sm w-full mb-2">
                                    <div className="flex items-center gap-2 text-base-content/80 hover:text-primary transition-colors cursor-pointer bg-base-200 px-4 py-2 rounded-full w-full justify-center">
                                        <i className="fa-solid fa-phone text-xs"></i>
                                        <a href={`tel:${medecin.telephone.replace(/\s+/g, '')}`} className="font-medium">{medecin.telephone}</a>
                                    </div>
                                </div>

                                {/* Services */}
                                <div className="w-full text-left mt-2">
                                    <p className="text-xs font-bold text-base-content/50 uppercase mb-3 text-center">Services & Expertises</p>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {medecin.services.map((service, index) => (
                                            <span key={index} className="badge badge-outline badge-md hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default">
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="card-actions mt-6 w-full">
                                    <button className="btn btn-primary w-full btn-outline group-hover:btn-active transition-all duration-300">
                                        Prendre Rendez-vous
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};