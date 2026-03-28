export const Contact = () => {
  return (
    <section className="bg-base-200 py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Restons en contact</h2>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-base-content mb-4">Contactez-nous</h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour toute question, prise de rendez-vous ou demande d'information. N'hésitez pas à nous joindre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Informations de contact (Left) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-base-100 rounded-2xl p-15 shadow-sm border border-base-content/5 flex flex-col gap-8 h-full">

              <div className="flex gap-5">
                <div className="bg-primary/10 text-primary w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-location-dot text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Notre Adresse</h3>
                  <p className="text-base-content/70"> Avenue de la Santé<br />05 - Koumassi, Abidjan</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-secondary/10 text-secondary w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-phone text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Téléphone</h3>
                  <a href="tel:+33180000000" className="text-base-content/70 hover:text-secondary transition-colors">
                    +225 05 02 15 36 33
                  </a>
                  <p className="text-sm text-base-content/50 mt-1">Lundi au Vendredi, 8h - 18h</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-accent/10 text-accent w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-envelope text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email</h3>
                  <a href="mailto:contact@santeplus.fr" className="text-base-content/70 hover:text-accent transition-colors break-all">
                    contact@santeplus.fr
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-error/10 text-error w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-truck-medical text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Urgences</h3>
                  <p className="text-base-content/70 font-semibold mb-1">Appelez le 15</p>
                  <a href="#urgence" className="text-sm text-error hover:underline transition-all">Consulter la page Urgence</a>
                </div>
              </div>

            </div>
          </div>

          {/* Formulaire (Right) */}
          <div className="lg:col-span-2">
            <div className="bg-base-100 rounded-2xl p-8 lg:p-12 shadow-sm border border-base-content/5">
              <h3 className="text-5xl font-bold mb-20">Envoyez-nous un message</h3>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Nom complet</span>
                    </label>
                    <input type="text" placeholder="Votre nom" className="input input-bordered focus:input-primary w-full bg-base-200/50" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Adresse Email</span>
                    </label>
                    <input type="email" placeholder="Votre adresse email" className="input input-bordered focus:input-primary w-full bg-base-200/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Numéro de téléphone</span>
                    </label>
                    <input type="tel" placeholder="Votre numéro de téléphone" className="input input-bordered focus:input-primary w-full bg-base-200/50" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Sujet</span>
                    </label>

                    {/* Selection du sujet */}
                    <select className="select select-bordered focus:select-primary w-full bg-base-200/50 text-base-content/80">
                      <option disabled selected>Sélectionnez un sujet</option>
                      <option>Prise de rendez-vous</option>
                      <option>Information médicale</option>
                      <option>Facturation</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Votre message</span>
                  </label><br />
                  <textarea className="textarea textarea-bordered focus:textarea-primary h-32 w-118 bg-base-200/50 text-base" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>

                <div className="mt-8">

                  {/* Bouton de message */}
                  <button type="submit" className="btn btn-primary w-full md:w-auto md:px-10 gap-2">
                    <i className="fa-regular fa-paper-plane"></i>
                    Envoyer le message
                  </button>
                  <p className="text-1xl text-base-content/50 mt-4 text-center md:text-left">
                    En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
