import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "AG's Nourish Hub | Clinical Dietitian in Hyderabad | AIG Hospitals",
  description: "AG's Nourish Hub — personalized diet plans guided with care, clarity, and expertise. Specializing in weight management, gut health, clinical conditions, and overall fitness.",
  openGraph: {
    title: "AG's Nourish Hub | Clinical Dietitian in Hyderabad",
    description: 'Customized diet plans that are realistic, flexible, and easy to follow. Book a consultation today.',
  },
}

const expertiseCards = [
  {
    icon: '🏥',
    title: 'Clinical Disease Management',
    description: 'Expert therapeutic diet plans for Diabetes, Hypertension, Heart Disease, CKD and ICU patients. Evidence-based Medical Nutrition Therapy.',
  },
  {
    icon: '🦠',
    title: 'Gut & Microbiome Nutrition',
    description: 'Microbiome-targeted dietary solutions integrating food science and bioinformatics for optimal gastrointestinal health and function.',
  },
  {
    icon: '👶',
    title: 'Paediatric & Maternal Nutrition',
    description: 'NPTEL-certified MIYCN approach covering child nutrition, maternal health, infant feeding, and every stage from pregnancy to childhood.',
  },
  {
    icon: '⚖️',
    title: 'Weight & Metabolic Health',
    description: 'Science-backed management of PCOS, Thyroid disorders, Obesity, and metabolic conditions with sustainable lifestyle transformation.',
  },
]

const services = [
  {
    icon: '🩺',
    title: 'Disease Management',
    desc: 'Therapeutic diets for Diabetes, Hypertension, Heart, and Renal conditions.',
  },
  {
    icon: '💪',
    title: 'Weight & PCOS Management',
    desc: 'Personalized meal plans for weight loss, PCOS and hormonal balance.',
  },
  {
    icon: '🔬',
    title: 'Research & Nutrition Coaching',
    desc: 'Microbiome-targeted, evidence-based nutrition coaching with documented plans.',
  },
  {
    icon: '🏋️',
    title: 'Fitness & Sports Nutrition',
    desc: 'Performance-optimized meal plans for athletes and active individuals to fuel training, enhance recovery, and build strength.',
  },
  {
    icon: '💊',
    title: 'Malnutrition & Micronutrient Deficiencies',
    desc: 'Targeted nutritional interventions for anaemia, vitamin deficiencies, undernutrition, and micronutrient imbalances.',
  },
]

const highlights = [
  { icon: '🔬', title: 'Evidence-Based Nutrition', sub: 'Science-Backed Approach' },
  { icon: '📋', title: 'Personalized Plans', sub: 'Tailored to Your Lifestyle' },
  { icon: '🌱', title: 'Sustainable Results', sub: 'No Crash Diets' },
  { icon: '💬', title: 'Ongoing Support', sub: 'Guidance at Every Step' },
]

export default function HomePage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* SECTION 1 — Hero */}
      <section className="bg-blush min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Floating decorations — hidden on small screens */}
        <div className="hidden sm:block absolute top-20 right-10 text-6xl opacity-20 float-1 pointer-events-none">🥗</div>
        <div className="hidden sm:block absolute bottom-20 left-10 text-5xl opacity-20 float-2 pointer-events-none">🥦</div>
        <div className="hidden md:block absolute top-1/2 right-1/4 text-4xl opacity-10 float-3 pointer-events-none">🍎</div>
        <div className="hidden md:block absolute top-10 left-1/3 text-3xl opacity-15 float-1 pointer-events-none">🌿</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Logo badge — replace with <Image src="/logo.png"> once logo is in public/ */}
            <div className="mb-6 w-fit">
              <div className="flex items-center gap-2 bg-white rounded-2xl px-5 py-3 shadow-sm border border-pink-100">
                <span className="text-2xl">🌿</span>
                <div>
                  <p className="font-playfair font-bold text-dark-text text-base leading-tight">AG&apos;s Nourish Hub</p>
                  <p className="text-primary text-xs font-semibold tracking-wider">CLINICAL NUTRITION</p>
                </div>
              </div>
            </div>

            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-dark-text leading-tight mb-5">
              Amrutha Gelli:{' '}
              <span className="text-primary">Clinical Dietitian</span>{' '}
              in Hyderabad
            </h1>

            <p className="text-body-text text-base leading-relaxed mb-8 max-w-xl">
              Welcome to AG&apos;s Nourish Hub, where your health journey is guided with care, clarity, and expertise. We help individuals achieve their wellness goals through customized diet plans that are realistic, flexible, and easy to follow. From weight management and gut health to clinical conditions and overall fitness, our approach is centered on understanding your needs and creating solutions that work for you. We focus on sustainable lifestyle changes rather than quick fixes, ensuring that your progress is consistent and long-lasting. Our goal is to make healthy eating simple, enjoyable, and a natural part of your everyday life.
            </p>

            {/* CTA Buttons — full width on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <Link href="/contact" className="btn-primary text-base px-8 py-4 shadow-lg shadow-pink-200 text-center">
                Book a Consultation
              </Link>
              <Link href="/about" className="btn-outline text-base px-8 py-4 text-center">
                Learn More
              </Link>
            </div>


          </div>

          {/* Right: Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative mt-6 mb-6">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 scale-110" />
              <div className="absolute inset-0 rounded-full border-4 border-primary/10 scale-125" />
              {/* Profile circle — smaller on mobile */}
              <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-pink-200 to-pink-50 border-4 border-primary/30 flex items-center justify-center overflow-hidden shadow-2xl shadow-pink-200/50">
                <div className="text-center text-primary/50">
                  <div className="text-6xl sm:text-8xl mb-2">👩‍⚕️</div>
                  <p className="text-xs sm:text-sm font-medium text-primary/70">Amrutha Gelli</p>
                  <p className="text-xs text-primary/50">Clinical Dietitian</p>
                </div>
              </div>
              {/* Floating badges — compact on mobile */}
              <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg border border-pink-100">
                <p className="text-xs text-body-text leading-none mb-0.5">Role</p>
                <p className="text-xs sm:text-sm font-bold text-primary">Clinical Dietitian</p>
              </div>
              <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg border border-pink-100">
                <p className="text-xs text-body-text leading-none mb-0.5">Clients</p>
                <p className="text-xs sm:text-sm font-bold text-primary">100+ Guided</p>
              </div>
              {/* Hide 3rd badge on very small screens to avoid crowding */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-pink-100">
                <p className="text-xs text-body-text">Experience</p>
                <p className="text-sm font-bold text-primary">2+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Highlights Bar (replaces old stats) */}
      <section className="bg-white py-14 border-b border-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="text-center group card border border-pink-50 hover:border-primary/20 py-6">
                <div className="text-3xl mb-2">{h.icon}</div>
                <p className="font-bold text-dark-text text-sm font-playfair group-hover:text-primary transition-colors">{h.title}</p>
                <p className="text-body-text text-xs mt-1">{h.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Core Expertise Cards */}
      <section className="bg-blush py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4 mx-auto w-fit">CORE EXPERTISE</span>
            <h2 className="section-title mb-4">What I Specialize In</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Evidence-based clinical nutrition tailored to your unique health needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertiseCards.map((card, i) => (
              <div key={i} className="card border border-pink-100 hover:border-primary/30 group">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-dark-text mb-3 font-playfair group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-body-text text-sm leading-relaxed mb-4">{card.description}</p>
                <Link
                  href="/services"
                  className="text-primary text-sm font-semibold flex items-center gap-1 transition-all"
                >
                  Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Quote / About Preview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Photo placeholder — replace with real photo later */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-3 bg-gradient-to-br from-pink-100 to-blush rounded-3xl -z-10" />
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-pink-200 shadow-xl relative">
                  <Image
                    src="/home-food-medicine.png"
                    alt="Let food be thy medicine"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Quote + text + CTA */}
            <div>
              <div className="text-5xl text-primary/20 mb-4 font-playfair leading-none">&ldquo;</div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark-text italic mb-8">
                Let food be thy medicine and medicine be thy food
              </h2>
              <p className="text-body-text leading-relaxed mb-10 text-base">
                AG&apos;s Nourish Hub, where your health journey is guided with care, clarity, and expertise. We help individuals achieve their wellness goals through customized diet plans that are realistic, flexible, and easy to follow. From weight management and gut health to clinical conditions and overall fitness, our approach is centered on understanding your needs and creating solutions that work for you. We focus on sustainable lifestyle changes rather than quick fixes, ensuring that your progress is consistent and long-lasting. Our goal is to make healthy eating simple, enjoyable, and a natural part of your everyday life.
              </p>
              <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                About Me <span>→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — Services Preview (5 cards: 3 + 2) */}
      <section className="bg-blush py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4 mx-auto w-fit">SERVICES</span>
            <h2 className="section-title mb-4">Expert Clinical Diet Plans Personalized for Your Health</h2>
          </div>
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {services.slice(0, 3).map((s, i) => (
              <div key={i} className="card text-center group border border-pink-100 hover:border-primary/30">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-card-title font-bold text-dark-text mb-3 font-playfair">{s.title}</h3>
                <p className="text-body-text text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link href="/services" className="text-primary text-sm font-semibold hover:underline">
                  Know More →
                </Link>
              </div>
            ))}
          </div>
          {/* Row 2: 2 centered cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
            {services.slice(3).map((s, i) => (
              <div key={i} className="card text-center group border border-pink-100 hover:border-primary/30">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-card-title font-bold text-dark-text mb-3 font-playfair">{s.title}</h3>
                <p className="text-body-text text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link href="/services" className="text-primary text-sm font-semibold hover:underline">
                  Know More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Instagram Follow CTA */}
      <section className="bg-white py-16 border-t border-pink-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="badge mb-4 mx-auto w-fit">STAY INSPIRED DAILY</span>
          <h2 className="section-title mb-4">Follow Us on Instagram</h2>
          <p className="text-body-text mb-8">
            Follow on Instagram{' '}
            <span className="text-primary font-semibold">@ags_nourish_hub</span>{' '}
            for nutrition tips, healthy recipes, and transformation stories that inspire your journey.
          </p>
          <a
            href="https://www.instagram.com/ags_nourish_hub?igsh=MXkwdDFrOXV0ZnplcQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @ags_nourish_hub
          </a>
        </div>
      </section>

      {/* SECTION 7 — Contact CTA (native app links) */}
      <section className="bg-blush py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Start Your Transformation: Contact Amrutha Gelli for Expert Guidance
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              The first step to a healthier you starts here.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WhatsApp — opens WhatsApp app directly */}
            <a
              href="https://wa.me/918074501300"
              target="_blank"
              rel="noopener noreferrer"
              className="card text-center hover:border-primary/30 group border border-pink-100"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-bold text-dark-text mb-2">WhatsApp Us</h3>
              <p className="text-body-text text-sm mb-3">Chat with us directly for quick answers</p>
              <span className="text-primary font-semibold text-sm">Chat Now →</span>
            </a>

            {/* Phone — opens phone dialer */}
            <a
              href="tel:+918074501300"
              className="card text-center hover:border-primary/30 group border border-pink-100"
            >
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark-text mb-2">Call Us</h3>
              <p className="text-body-text text-sm mb-3">+91 8074501300</p>
              <span className="text-primary font-semibold text-sm">Call Now →</span>
            </a>

            {/* Book Appointment — opens contact page */}
            <Link href="/contact" className="card text-center hover:border-primary/30 group border border-pink-100">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark-text mb-2">Book an Appointment</h3>
              <p className="text-body-text text-sm mb-3">Schedule at your convenience</p>
              <span className="text-primary font-semibold text-sm">Book Consultation →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
