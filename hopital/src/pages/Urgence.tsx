export const Urgence = () => {
    return (
        <section id="urgence" className="py-24 bg-base-100 flex items-center justify-center relative overflow-hidden">
            {/* Background page */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-error/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 transform translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="bg-gradient-to-br from-error to-red-700 rounded-3xl shadow-2xl overflow-hidden text-white flex flex-col lg:flex-row">

                    {/* Contenu de la gauche */}
                    <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-4 mb-6 relative">
                            <div className="absolute -inset-2 bg-white/20 rounded-full blur-lg animate-pulse"></div>
                            <div className="bg-white text-error p-4 rounded-full shadow-lg relative z-10">
                                <i className="fa-solid fa-truck-medical text-3xl"></i>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-sm">
                                Urgences 24/7
                            </h2>
                        </div>

                        <p className="text-lg lg:text-xl text-red-50 mb-10 font-medium leading-relaxed max-w-2xl">
                            En cas d'urgence vitale, notre service d'accueil des urgences est ouvert 24h/24 et 7j/7 avec une équipe médicale hautement qualifiée toujours prête à intervenir.
                        </p>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] mb-8 transform transition-transform hover:-translate-y-1 duration-300">
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center text-error shadow-[0_0_20px_rgba(255,255,255,0.4)] animate-pulse shrink-0">
                                    <i className="fa-solid fa-phone text-3xl transform -scale-x-100"></i>
                                </div>
                                <div className="text-center sm:text-left">
                                    <p className="text-red-100 font-semibold mb-1 uppercase tracking-widest text-sm flex items-center gap-2 justify-center sm:justify-start">
                                        <i className="fa-solid fa-circle-exclamation"></i>
                                        Numéro d'urgence principal
                                    </p>
                                    <a href="tel:15" className="text-5xl md:text-6xl font-black drop-shadow-md hover:text-red-200 transition-colors inline-block mt-1">
                                        15 <span className="text-3xl font-bold opacity-80">(santePLUS)</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex items-start gap-4 bg-red-900/40 rounded-xl p-5 border border-white/10 hover:bg-red-900/60 transition-colors">
                                <div className="bg-white/20 p-2 rounded-lg shrink-0">
                                    <i className="fa-solid fa-location-dot text-xl text-white"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Accès Rapide</h3>
                                    <p className="text-sm text-red-100 leading-snug">Entrée dédiée aux urgences, dans l'aile rouge. Suivez les panneaux d'indication.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-red-900/40 rounded-xl p-5 border border-white/10 hover:bg-red-900/60 transition-colors">
                                <div className="bg-white/20 p-2 rounded-lg shrink-0">
                                    <i className="fa-solid fa-clipboard-user text-xl text-white"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">À prévoir</h3>
                                    <p className="text-sm text-red-100 leading-snug">Si possible, apportez votre carte Vitale, pièce d'identité et carnet de santé.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className="hidden lg:flex w-2/5 relative overflow-hidden bg-red-800 items-center justify-center min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-red-900 to-transparent opacity-80"></div>

                        <div className="text-error-content/10 transform rotate-12 scale-150 transition-transform hover:scale-[1.6] hover:rotate-6 duration-700">
                            <i className="fa-solid fa-heart-pulse text-[300px]"></i>
                        </div>

                        {/* animation */}
                        <div className="absolute bottom-10 right-10 flex gap-2 items-end z-20">
                            <span className="h-4 w-4 rounded-full bg-white opacity-40 animate-pulse"></span>
                            <span className="h-4 w-4 rounded-full bg-white opacity-70 animate-bounce" style={{ animationDelay: '100ms' }}></span>
                            <span className="h-4 w-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,1)]"></span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
