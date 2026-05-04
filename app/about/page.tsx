import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Amrutha Gelli | Clinical Dietitian — AIG Hospitals Hyderabad',
  description: 'Learn about Sri Hitha Naga Sai Amrutha Gelli — MSc Nutrition & Dietetics (GPA 8.8), Clinical Dietitian at AIG Hospitals. Expertise in gut health, paediatric nutrition, PCOS, diabetes and microbiome-targeted dietary solutions.',
  openGraph: {
    title: 'About Amrutha Gelli | Clinical Dietitian',
    description: 'Healing through food, living through balance. The story of Amrutha Gelli.',
  },
}

const expertiseCards = [
  { icon: '🩺', title: 'Clinical Nutrition Expert', desc: 'Disease reversal through therapeutic diets and evidence-based medical nutrition therapy.' },
  { icon: '🦠', title: 'Gut & GI Nutrition', desc: 'Microbiome-targeted approaches for gastroenterology and functional gut health.' },
  { icon: '👶', title: 'Paediatric Nutrition', desc: 'MIYCN-certified expert in maternal, infant, and child nutrition from NPTEL.' },
  { icon: '⚖️', title: 'Metabolic & PCOS Specialist', desc: 'Thyroid, obesity, metabolic condition management with sustainable lifestyle plans.' },
  { icon: '🔬', title: 'Research Scientist Aspirant', desc: 'Passionate about bioinformatics, functional foods, and nutrition science innovation.' },
  { icon: '🏋️', title: 'Fitness & Sports Nutrition', desc: 'Performance-optimized nutrition plans for athletes and active individuals — fueling training, accelerating recovery, and building sustainable strength.' },
]


const experience = [
  {
    role: 'Junior Dietitian',
    org: 'AIG Hospitals, Hyderabad',
    period: 'Aug 2025 – Present',
    type: 'Full-time',
    bullets: [
      'Providing individualized Medical Nutrition Therapy for chronic disease patients',
      'Developing personalized meal plans for inpatient and outpatient settings',
      'Counselling patients on diabetes, hypertension, renal and cardiac diets',
      'Documenting nutritional assessments and progress monitoring',
    ],
  },
  {
    role: 'Nutrition Coach Intern',
    org: 'Hiii Healthy',
    period: 'Mar 2025 – Jul 2025',
    type: 'Internship',
    bullets: [
      'Managed PCOS, thyroid, and metabolic health clients via virtual consultations',
      'Designed customized meal plans aligned with client goals and preferences',
      'Tracked client progress using app-based monitoring tools',
      'Conducted follow-up sessions and nutritional counselling',
    ],
  },
  {
    role: 'Dietetic Intern',
    org: 'Omni Hospital, Hyderabad',
    period: 'Aug 2024 – Sep 2024',
    type: 'Internship',
    bullets: [
      'Handled outpatient and inpatient nutrition care and assessment',
      'Managed obesity, paediatric nutrition, and therapeutic diet cases',
      'Assisted senior dietitians with nutritional counselling services',
    ],
  },
  {
    role: 'Dietetic Intern',
    org: 'KIMS Hospital, Hyderabad',
    period: 'Feb 2023 – Apr 2023',
    type: 'Internship',
    bullets: [
      'Gained hands-on experience in nephrology and gastroenterology nutrition',
      'Assisted with ICU, enteral and parenteral nutrition protocols',
      'Conducted dietary assessments for complex clinical cases',
    ],
  },
]

const certifications = [
  { title: 'Entrepreneurship in Public Health', issuer: 'JSS AHER', year: '2025' },
  { title: 'Nourish & Connect: Entrepreneurship in Nutrition', issuer: 'JSS AHER', year: '2024' },
  { title: 'Nutrition for Geriatric Health & Critical Care', issuer: 'JSS AHER', year: '2024' },
  { title: 'Holistic Nutrition', issuer: 'Malla Reddy University', year: '2022' },
  { title: 'Maternal Infant Young Child Nutrition (MIYCN)', issuer: 'NPTEL', year: '2022' },
  { title: 'Psychology of Everyday', issuer: 'NPTEL', year: '2021' },
  { title: 'Child Nutrition and Cooking', issuer: 'Stanford University Online', year: '2021' },
]

const skills = [
  'Clinical Nutrition', 'Paediatric Nutrition', 'Nutrition Research', 'GI Nutrition',
  'Dietary Counselling', 'Hepatic Nutrition', 'Research & Documentation', 'Presentation Skills',
  'Medical Nutrition Therapy', 'Enteral Nutrition', 'Parenteral Nutrition', 'PCOS Management',
  'Diabetes Nutrition', 'Microbiome Research', 'Bioinformatics', 'Functional Foods',
]

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-blush py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-6 w-fit">ABOUT ME</span>
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-dark-text leading-tight mb-6">
                &ldquo;Let food be thy medicine{' '}
                <span className="text-primary">and medicine be thy food&rdquo;</span>
              </h1>
              <p className="text-body-text text-lg leading-relaxed mb-8">
                AG&apos;s Nourish Hub, where your health journey is guided with care, clarity, and expertise. We help individuals achieve their wellness goals through customized diet plans that are realistic, flexible, and easy to follow.
              </p>
              <Link href="/contact" className="btn-primary">Book a Consultation</Link>
            </div>
            <div className="flex justify-center">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-primary/30 flex items-center justify-center shadow-2xl shadow-pink-200/50 relative overflow-hidden">
                <Image src="/profeesional2.jpeg" alt="Amrutha Gelli" fill className="object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Bio */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative w-full h-96 md:h-[600px] rounded-3xl border-2 border-pink-200 flex items-center justify-center overflow-hidden shadow-xl">
              <Image src="/profeesional3.png" alt="Clinical Dietitian" fill className="object-cover object-[50%_40%]" />
            </div>
            <div>
              <span className="badge mb-4 w-fit">BIOGRAPHY</span>
              <h2 className="section-title mb-6">Sri Hitha Naga Sai Amrutha Gelli</h2>
              <p className="text-body-text leading-relaxed mb-4">
                Hi, I&apos;m Sri Amrutha—your go-to nutritionist/dietician for making healthy living simple, realistic, and sustainable.
              </p>
              <p className="text-body-text leading-relaxed mb-4">
                I started this journey because I saw how confusing and overwhelming nutrition can feel for most people. There are too many rules, too many restrictions, and honestly—not enough real, practical solutions that fit into everyday life. I wanted to change that and make nutrition something people can actually understand and follow without stress.
              </p>
              <p className="text-body-text leading-relaxed mb-4">
                My approach is simple: no extreme diets, no unrealistic expectations. I believe real results come from the right guidance, a plan that suits your lifestyle, and habits you can stay consistent with. Because what works in real life is what truly creates lasting change—and that&apos;s exactly what I help you build.
              </p>
              <p className="text-body-text leading-relaxed mb-4">
                I also strongly believe that nutrition is not just about weight or appearance. It&apos;s about how you feel every day—your energy levels, your confidence, your mood, and your overall well-being. When you start eating right for your body, everything else begins to improve naturally.
              </p>
              <p className="text-body-text leading-relaxed mb-4">
                Whether you&apos;re trying to lose weight, get fitter, manage your health, or simply feel more confident in your own body, I&apos;m here to guide and support you every step of the way. My goal is to give you personalized, practical plans that fit into your routine—plans that are easy to follow, flexible, and designed for long-term success.
              </p>
              <p className="text-body-text leading-relaxed mb-6">
                Because at the end of the day, it&apos;s not about being perfect—it&apos;s about being consistent, patient, and committed to becoming a better version of yourself.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="skill-tag">📍 Hyderabad, India</span>
                <span className="skill-tag">🗣️ Telugu | Hindi | English</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="bg-blush py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4 mx-auto w-fit">AREAS OF EXPERTISE</span>
            <h2 className="section-title">What I Bring to the Table</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseCards.map((card, i) => (
              <div key={i} className="card border border-pink-100 hover:border-primary/30 group">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="font-bold text-dark-text mb-2 font-playfair group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-body-text text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Experience */}
      <section className="bg-blush py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4 mx-auto w-fit">EXPERIENCE</span>
            <h2 className="section-title">Clinical Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((exp, i) => (
              <div key={i} className="card border border-pink-100 hover:border-primary/30">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-dark-text font-playfair text-lg">{exp.role}</h3>
                    <p className="text-primary font-semibold text-sm">{exp.org}</p>
                  </div>
                  <span className="badge text-xs whitespace-nowrap">{exp.type}</span>
                </div>

                <ul className="space-y-1.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-body-text text-sm flex gap-2">
                      <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4 mx-auto w-fit">CERTIFICATIONS</span>
            <h2 className="section-title">Credentials & Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <div key={i} className="card border border-pink-100 hover:border-primary/30 group">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-bold text-dark-text text-base font-playfair mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-body-text text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-blush py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge mb-4 mx-auto w-fit">SKILLS</span>
            <h2 className="section-title">Clinical Competencies</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {skills.map((skill, i) => (
              <span key={i} className="skill-tag hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>

          {/* Languages */}
          <div className="text-center">
            <h3 className="font-bold text-dark-text mb-4">Languages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { lang: 'Telugu', level: 'Native' },
                { lang: 'English', level: 'Proficient' },
                { lang: 'Hindi', level: 'Proficient' },
              ].map((l, i) => (
                <div key={i} className="card border border-pink-100 text-center px-4 sm:px-6 py-3 flex-1 min-w-[100px] max-w-[140px]">
                  <p className="font-bold text-dark-text text-sm">{l.lang}</p>
                  <p className="text-primary text-xs font-semibold">{l.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-pink-100 mb-8 text-lg">Book a personalized nutrition consultation with Amrutha Gelli today.</p>
          <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:-translate-y-1 inline-block">
            Book a Consultation →
          </Link>
        </div>
      </section>
    </div>
  )
}
