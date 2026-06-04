import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-stone-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-2xl font-serif font-bold tracking-tighter uppercase">Sanzio 26</span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500 -mt-1">Salon & Beauty</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="#servizi" className="hover:text-stone-500 transition-colors">Servizi</a>
          <a href="#listino" className="hover:text-stone-500 transition-colors">Prezzi</a>
          <a href="#about" className="hover:text-stone-500 transition-colors">Il Salone</a>
          <a href="#contatti" className="hover:text-stone-500 transition-colors">Contatti</a>
        </div>
        <a 
          href="tel:+393357667568" 
          className="bg-stone-900 text-white px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors"
        >
          Prenota
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000" 
          alt="Sanzio 26 Salon Interior" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h2 className="text-sm uppercase tracking-[0.4em] mb-6 animate-fade-in">Hair Salon & Beauty Experience</h2>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 animate-slide-up leading-tight">
            L'eccellenza del <br /> benessere a Milano.
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 text-stone-200 max-w-2xl mx-auto italic">
            Salone ufficiale Cotril in zona De Angeli / Wagner. Consulenza personalizzata e risultati tecnici d'eccezione.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#servizi" className="w-full sm:w-auto bg-white text-stone-900 px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-stone-100 transition-all">
              Scopri i Servizi
            </a>
            <a href="tel:+393357667568" className="w-full sm:w-auto border border-white text-white px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white/10 transition-all">
              Chiamaci ora
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-stone-50 py-10 px-6 border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-white rounded-full shadow-sm border border-stone-100 text-stone-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400">Indirizzo</p>
              <p className="font-medium">Via Raffaello Sanzio 26, Milano</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <div className="p-3 bg-white rounded-full shadow-sm border border-stone-100 text-stone-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400">Orario oggi</p>
              <p className="font-medium">09:30 - 19:00</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <div className="p-3 bg-white rounded-full shadow-sm border border-stone-100 text-stone-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400">Telefono</p>
              <p className="font-medium">+39 335 766 7568</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200" 
              alt="Haircare Experience" 
              className="w-full aspect-[4/5] object-cover shadow-2xl grayscale-[0.2]"
            />
            <div className="absolute -bottom-8 -right-8 bg-stone-900 text-white p-10 hidden md:block max-w-xs">
              <p className="text-3xl font-serif mb-2 italic">Since 2020</p>
              <p className="text-xs uppercase tracking-[0.2em] opacity-70 leading-relaxed">
                Nato dalla passione per la bellezza e la collaborazione con Cotril.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-4 font-bold">Benvenuti a Sanzio 26</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">La tua bellezza, <br /> la nostra consulenza.</h2>
            <p className="text-stone-600 mb-6 leading-relaxed text-lg">
              Sanzio 26 non è solo un parrucchiere, ma una vera e propria Beauty Experience nel cuore di Milano. Fondato nel 2020, il nostro salone nasce dalla collaborazione con il prestigioso brand <strong>Cotril</strong>.
            </p>
            <p className="text-stone-600 mb-10 leading-relaxed">
              Puntiamo su una consulenza d'immagine su misura, dove ogni taglio, colore o trattamento viene studiato per valorizzare la tua personalità e la salute dei tuoi capelli. Dalle colorazioni biologiche alle tecniche di schiaritura più avanzate come il Balayage, il nostro team di esperti ti aspetta per trasformare i tuoi desideri in realtà.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-stone-900 rounded-full" />
                <span className="text-sm uppercase tracking-wider font-medium">Salone Ufficiale Cotril</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-stone-900 rounded-full" />
                <span className="text-sm uppercase tracking-wider font-medium">Consulenza Personalizzata</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-stone-900 rounded-full" />
                <span className="text-sm uppercase tracking-wider font-medium">Schiariture Avanzate</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-stone-900 rounded-full" />
                <span className="text-sm uppercase tracking-wider font-medium">Trattamenti Benessere</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <div className="text-2xl font-serif italic border-l-2 border-stone-200 pl-6 text-stone-400">
                In partnership with Cotril Professional
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="bg-stone-900 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="text-white max-w-2xl">
              <h3 className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4 font-bold">Il nostro Menù</h3>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Esperienze di stile & Benessere</h2>
              <p className="text-stone-400 italic">
                Utilizziamo solo prodotti di alta gamma per garantire risultati eccellenti e il massimo rispetto della fibra capillare.
              </p>
            </div>
            <a href="tel:+393357667568" className="bg-white text-stone-900 px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-stone-200 transition-colors">
              Prenota Ora
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            <ServiceCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>}
              title="Taglio & Styling"
              items={["Taglio Donna", "Taglio Uomo", "Extreme Cut", "Piega Professionale"]}
            />
            <ServiceCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>}
              title="Colorazione"
              items={["Colore Completo", "Colore Biologico", "Tonalizzazione", "Ritocco Colore"]}
            />
            <ServiceCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>}
              title="Schiariture"
              items={["Balayage", "Colpi di Sole", "Babylights", "Decolorazione"]}
            />
            <ServiceCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>}
              title="Trattamenti"
              items={["Ricostruzione", "Laminazione", "Cheratina", "Nanoplastia"]}
            />
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section id="listino" className="py-24 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-4 font-bold">Listino Esperienze</h3>
            <h2 className="text-4xl font-serif mb-4">I nostri Prezzi</h2>
            <p className="text-stone-500 font-light italic">
              Prezzi indicativi. Per un preventivo personalizzato basato sulla lunghezza e sulle caratteristiche dei tuoi capelli, ti invitiamo a una consulenza gratuita in salone.
            </p>
          </div>

          <div className="space-y-12">
            <PriceGroup 
              title="Taglio & Styling" 
              items={[
                { name: "Taglio Donna", price: "da €45", duration: "60 min" },
                { name: "Extreme Cut", price: "da €55", duration: "30 min" },
                { name: "Taglio Uomo", price: "da €30", duration: "45 min" },
                { name: "Piega & Shampoo", price: "da €25", duration: "45 min" },
              ]}
            />
            <PriceGroup 
              title="Trattamenti & Cura" 
              items={[
                { name: "Ricostruzione Profonda Cotril", price: "da €35", duration: "30 min" },
                { name: "Laminazione Capelli", price: "da €40", duration: "15 min" },
                { name: "Trattamento Cute Specifico", price: "da €20", duration: "20 min" },
                { name: "Massaggio Benessere Testa", price: "da €15", duration: "15 min" },
              ]}
            />
            <PriceGroup 
              title="Schiariture & Colore" 
              items={[
                { name: "Balayage / Schiariture", price: "da €110", duration: "120 min" },
                { name: "Colore Completo", price: "da €60", duration: "90 min" },
                { name: "Tonalizzazione / Gloss", price: "da €30", duration: "30 min" },
                { name: "Acconciatura Evento", price: "da €50", duration: "60 min" },
              ]}
            />
          </div>

          <div className="mt-16 p-8 bg-white border border-stone-200 text-center">
            <p className="text-stone-600 text-sm mb-6">
              I prezzi variano in base alla complessità del lavoro e alla quantità di prodotto utilizzato.
            </p>
            <a href="tel:+393357667568" className="inline-block bg-stone-900 text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-stone-800 transition-colors">
              Richiedi il Listino Completo
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4 text-stone-800">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-4 font-bold">Feedback</h3>
            <h2 className="text-4xl font-serif mb-4">Cosa dicono i nostri clienti</h2>
            <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-500">
              <span className="flex items-center gap-1">4.8 Google</span>
              <span className="flex items-center gap-1">4.8 Treatwell</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              text="Romina sa ascoltare ed esaudire tutte le richieste della cliente. Vera esperta di taglio e colore."
              author="Cliente Treatwell"
            />
            <TestimonialCard 
              text="SUPER! Il migliore su Milano. Salone accogliente composto da veri professionisti."
              author="Cliente Google"
            />
            <TestimonialCard 
              text="Ottimo e rilassante massaggio alla testa. Ambiente moderno e personale gentilissimo."
              author="Cliente Treatwell"
            />
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section id="contatti" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif mb-10">Vieni a trovarci</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0 text-stone-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Indirizzo</h4>
                    <p className="text-stone-600">Via Raffaello Sanzio 26, 20149 Milano</p>
                    <p className="text-sm text-stone-400 mt-1 italic">Zona De Angeli / Wagner (M1)</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0 text-stone-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Come raggiungerci</h4>
                    <p className="text-stone-600">Metro M1 De Angeli o Wagner</p>
                    <p className="text-sm text-stone-400 mt-1 italic">Entrambe a soli 4 minuti a piedi dal salone.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0 text-stone-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Contatti</h4>
                    <a href="tel:+393357667568" className="text-stone-600 hover:text-stone-900">+39 335 766 7568</a>
                    <p className="text-stone-400 text-sm mt-1">Si consiglia la prenotazione</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0 text-stone-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Social</h4>
                    <div className="flex gap-4">
                      <a href="#" className="text-stone-600 hover:text-stone-900 flex items-center gap-1 underline underline-offset-4 decoration-stone-200">Instagram</a>
                      <a href="#" className="text-stone-600 hover:text-stone-900 flex items-center gap-1 underline underline-offset-4 decoration-stone-200">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-stone-900 text-white p-10 md:p-16">
              <div className="flex items-center gap-3 mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <h2 className="text-2xl font-serif">Orari di Apertura</h2>
              </div>
              <div className="space-y-4 border-t border-stone-800 pt-8">
                <div className="flex justify-between items-center pb-3 border-b border-stone-800">
                  <span className="text-stone-400">Lunedì</span>
                  <span className="font-medium">Chiuso</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-800">
                  <span className="text-stone-400">Martedì</span>
                  <span className="font-medium">09:30 - 19:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-800">
                  <span className="text-stone-400">Mercoledì</span>
                  <span className="font-medium">09:30 - 19:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-800 text-stone-100">
                  <span className="text-stone-400">Giovedì</span>
                  <span className="font-medium">09:30 - 21:00 <span className="text-[10px] uppercase ml-2 text-stone-500">(Late Night)</span></span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-800">
                  <span className="text-stone-400">Venerdì</span>
                  <span className="font-medium">09:30 - 20:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-800">
                  <span className="text-stone-400">Sabato</span>
                  <span className="font-medium">09:30 - 19:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Domenica</span>
                  <span className="font-medium">Chiuso</span>
                </div>
              </div>
              <a 
                href="tel:+393357667568"
                className="mt-12 block w-full bg-white text-stone-900 text-center py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-stone-100 transition-colors"
              >
                Chiama per un appuntamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50 py-12 px-6 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-serif font-bold tracking-tighter uppercase">Sanzio 26</span>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">© 2024 Sanzio 26 Salon Milano. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-xs uppercase tracking-widest text-stone-500">
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) {
  return (
    <div className="bg-stone-800/50 p-10 border border-stone-800 hover:border-stone-600 transition-all group">
      <div className="text-stone-100 mb-6 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-white mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-stone-400 flex justify-between items-center group-hover:text-stone-300 transition-colors">
            {item}
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity"><path d="m9 18 6-6-6-6"/></svg>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PriceGroup({ title, items }: { title: string, items: { name: string, price: string, duration: string }[] }) {
  return (
    <div className="bg-white p-8 md:p-10 shadow-sm border border-stone-100">
      <h3 className="text-xl font-serif mb-8 border-b border-stone-100 pb-4 italic">{title}</h3>
      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between items-end gap-4">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-stone-800">{item.name}</span>
                <span className="font-bold text-stone-900">{item.price}</span>
              </div>
              <p className="text-xs text-stone-400 uppercase tracking-widest">{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TestimonialCard({ text, author }: { text: string, author: string }) {
  return (
    <div className="bg-stone-50 p-10 border border-stone-100 italic relative">
      <div className="text-4xl font-serif text-stone-200 absolute top-4 left-4">“</div>
      <p className="text-stone-700 leading-relaxed mb-6 relative z-10">{text}</p>
      <p className="text-xs uppercase tracking-widest font-bold text-stone-900">— {author}</p>
    </div>
  )
}
