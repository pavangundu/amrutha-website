import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Amrutha Gelli Clinical Dietitian — Diet Plans Hyderabad',
  description: 'Expert clinical diet plans for diabetes, PCOS, gut health, weight management, paediatric nutrition, and more. Personalized nutrition therapy at AIG Hospitals Hyderabad.',
  openGraph: {
    title: 'Clinical Nutrition Services | Amrutha Gelli',
    description: 'Personalized diet plans for diabetes, PCOS, gut health, and clinical disease management.',
  },
}

const services = [
  {
    icon: '🩺',
    title: 'Clinical Disease Management',
    subtitle: 'Therapeutic nutrition for complex health conditions',
    desc: 'Comprehensive therapeutic diet plans for diabetes, hypertension, heart disease, renal conditions, hepatic disorders, and ICU patients. Evidence-based medical nutrition therapy with individualized assessment and ongoing support.',
    bullets: [
      'Diabetes mellitus (Type 1, Type 2, Gestational)',
      'Hypertension & Cardiovascular disease diets',
      'Chronic Kidney Disease & renal diet therapy',
      'Hepatic disorders & liver disease nutrition',
      'ICU & critical care enteral/parenteral nutrition',
    ],
    img: '/service-clinical.png',
    imgSide: 'right',
  },
  {
    icon: '🏅',
    title: 'Sports & Fitness Nutrition',
    subtitle: 'Performance-optimized fuel for active bodies',
    desc: 'Tailored nutrition strategies for athletes, fitness enthusiasts, and active individuals. From pre-workout fueling to post-workout recovery, every plan is designed to maximize performance, build strength, and support long-term physical health.',
    bullets: [
      'Pre & post-workout meal planning for optimal performance',
      'Muscle building and body recomposition nutrition',
      'Endurance and stamina enhancement through diet',
      'Sports hydration and electrolyte balance guidance',
      'Injury recovery and anti-inflammatory nutrition protocols',
    ],
    img: '/service-sports.png',
    imgSide: 'left',
  },
  {
    icon: '🌸',
    title: 'PCOS & Hormonal Balance Nutrition',
    subtitle: 'Science-backed hormonal health management',
    desc: 'Specialized nutrition protocols for PCOS, thyroid disorders, and hormonal conditions. Personalized plans addressing root causes with sustainable dietary approaches that restore hormonal balance naturally.',
    bullets: [
      'Polycystic Ovary Syndrome (PCOS) nutrition therapy',
      'Thyroid disorder dietary management',
      'Hormonal imbalance nutritional interventions',
      'Insulin resistance management through diet',
      'Sustainable lifestyle transformation programs',
    ],
    img: '/service-pcos.png',
    imgSide: 'right',
  },
  {
    icon: '⚖️',
    title: 'Weight Management & Metabolic Health',
    subtitle: 'Evidence-based transformation programs',
    desc: 'Science-backed weight loss and metabolic optimization plans. Behavioral change strategies, mindful eating habits, and biometric progress tracking for sustainable, long-term results.',
    bullets: [
      'Personalized calorie-optimized meal plans',
      'Metabolic rate assessment and optimization',
      'Behavioral nutrition counselling',
      'Progress tracking with biometric monitoring',
      'Maintenance and relapse prevention strategies',
    ],
    img: '/service-weight.png',
    imgSide: 'left',
  },
  {
    icon: '👶',
    title: 'Paediatric & Maternal Nutrition',
    subtitle: 'MIYCN-certified expert care',
    desc: 'Expert guidance for child nutrition, maternal health, and infant feeding. MIYCN-certified approach covering every stage from pregnancy to childhood for optimal growth and development.',
    bullets: [
      'Antenatal and postnatal maternal nutrition',
      'Breastfeeding support and lactation nutrition',
      'Infant complementary feeding guidance',
      'Childhood growth and development nutrition',
      'Paediatric therapeutic diet management',
    ],
    img: '/service-paediatric.png',
    imgSide: 'right',
  },
  {
    icon: '🦠',
    title: 'Gut Health & Microbiome Nutrition',
    subtitle: 'Cutting-edge microbiome-targeted solutions',
    desc: 'Microbiome-targeted dietary solutions integrating food science, bioinformatics insights, and functional food innovation for optimal gastrointestinal health and systemic wellness.',
    bullets: [
      'Microbiome diversity enhancement protocols',
      'Irritable Bowel Syndrome (IBS) dietary management',
      'Inflammatory bowel disease nutrition support',
      'Prebiotic and probiotic dietary integration',
      'Functional food and fermented food guidance',
    ],
    img: '/service-gut.png',
    imgSide: 'left',
  },
  {
    icon: '🔬',
    title: 'Nutrition Coaching & Research',
    subtitle: 'Evidence-based personalized guidance',
    desc: 'Evidence-based nutrition counselling with detailed documentation, meal plan creation, and research-backed dietary guidance tailored to Indian dietary preferences and cultural food practices.',
    bullets: [
      'Comprehensive nutritional assessment and profiling',
      'Customized Indian diet meal planning',
      'Research-backed dietary protocol development',
      'Ongoing coaching and accountability support',
      'Nutritional education and health literacy',
    ],
    img: '/service-coaching.png',
    imgSide: 'right',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-blush py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge mb-6 mx-auto w-fit">SERVICES</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-dark-text leading-tight mb-6">
            Expert Clinical Diet Plans{' '}
            <span className="text-primary">Personalized for Your</span>{' '}
            Health Revolution
          </h1>
          <p className="text-body-text text-lg max-w-3xl mx-auto mb-8">
            From clinical disease management to microbiome-targeted nutrition — comprehensive, evidence-based dietary solutions for every health need.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { num: '500+', label: 'Patients counselled' },
              { num: 'KIMS & AIG', label: 'Hospital experience' },
              { num: '4+', label: 'Internship programs' },
              { num: '10+', label: 'Certifications' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl px-6 py-4 shadow-sm border border-pink-100 text-center min-w-[130px]">
                <p className="text-primary font-bold text-xl font-playfair">{s.num}</p>
                <p className="text-body-text text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services alternating sections */}
      {services.map((service, i) => (
        <section
          key={i}
          className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-blush'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image — alternates: even=right, odd=left */}
              <div className={service.imgSide === 'right' ? 'lg:order-2' : 'lg:order-1'}>
                <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden border-2 border-pink-200 shadow-xl relative">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={service.imgSide === 'right' ? 'lg:order-1' : 'lg:order-2'}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <span className="badge mb-3 w-fit">SERVICE</span>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-dark-text mb-2">{service.title}</h2>
                <p className="text-primary font-semibold mb-4 text-sm">{service.subtitle}</p>
                <p className="text-body-text leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2 mb-8">
                  {service.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-body-text text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Book Consultation →
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-primary py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Plan Is Right for You?
          </h2>
          <p className="text-pink-100 mb-8">Book a free initial consultation and Amrutha will guide you to the perfect nutrition plan.</p>
          <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:-translate-y-1 inline-block">
            Book a Free Consultation →
          </Link>
        </div>
      </section>
    </div>
  )
}
