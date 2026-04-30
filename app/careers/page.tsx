'use client'

import { useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'

const valueCards = [
  { num: '01', title: 'Puts Patients First', desc: 'We genuinely care about patient well-being above all else. Your health is our purpose.' },
  { num: '02', title: 'Takes Ownership', desc: 'You own your work—taking responsibility for outcomes and seeing every task to completion.' },
  { num: '03', title: 'Delivers Results', desc: 'We focus on measurable outcomes and real-world impact for every patient and project.' },
  { num: '04', title: 'Acts Like an Owner', desc: 'We invest in the clinic\'s mission as if it were our own, driving excellence at every step.' },
  { num: '05', title: 'Values Teamwork', desc: 'Great nutrition outcomes come from great teams. We collaborate, support, and elevate each other.' },
  { num: '06', title: 'Flexible at Work', desc: 'We embrace adaptability, creative problem-solving, and continuous learning in an evolving field.' },
]

const stats = [
  { num: '100%', label: 'Dedication' },
  { num: 'Evidence-Based', label: 'Practice' },
  { num: 'Hyderabad', label: 'Headquarters' },
  { num: 'Growing', label: 'Team' },
]

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    location: '',
    whyUs: '',
    consent: false,
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) {
      toast.error('Please agree to the privacy policy to proceed.')
      return
    }
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setLoading(false)
    toast.success('Application submitted! We\'ll get in touch soon. 🎉')
    setFormData({
      fullName: '', email: '', phone: '', position: '', experience: '',
      location: '', whyUs: '', consent: false,
    })
    setResumeFile(null)
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-blush py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-6 w-fit">JOIN THE TEAM</span>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-dark-text leading-tight mb-6">
                Your Search for the{' '}
                <span className="text-primary">Best Workplace</span>{' '}
                in Nutrition Ends Here.
              </h1>
              <p className="text-body-text text-lg mb-8">
                Be part of an evidence-based, patient-first clinical nutrition practice. We&apos;re looking for passionate individuals who believe in the healing power of food.
              </p>
              <a href="#apply" className="btn-primary inline-flex items-center gap-2">
                Apply Now →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['🩺', '🥗', '🔬', '💊'].map((emoji, i) => (
                <div key={i} className="h-32 rounded-2xl bg-gradient-to-br from-pink-200 to-pink-50 border border-pink-200 flex items-center justify-center text-4xl shadow-sm">
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-white py-14 border-b border-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary font-playfair">{stat.num}</p>
                <p className="text-body-text text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We See You As... */}
      <section className="bg-blush py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4 mx-auto w-fit">OUR VALUES</span>
            <h2 className="section-title">We See You As Someone Who…</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {valueCards.map((card, i) => (
              <div key={i} className="bg-primary rounded-2xl p-6 hover:bg-primary-dark transition-colors group">
                <div className="text-pink-200 font-bold text-4xl font-playfair mb-3">{card.num}</div>
                <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-pink-100 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards / Recognition placeholder */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge mb-4 mx-auto w-fit">RECOGNITION</span>
            <h2 className="section-title">Awards & Achievements</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: '🏆', label: 'IELTS C1 Certified', sub: 'Band 7.5' },
              { icon: '🎓', label: 'GPA 8.8/10', sub: 'MSc Nutrition' },
              { icon: '🏥', label: 'AIG Hospitals', sub: 'Junior Dietitian' },
              { icon: '📜', label: '7 Certifications', sub: 'Nutrition & Health' },
            ].map((award, i) => (
              <div key={i} className="card border border-pink-100 text-center group hover:border-primary/30">
                <div className="text-4xl mb-3">{award.icon}</div>
                <p className="font-bold text-dark-text text-sm">{award.label}</p>
                <p className="text-body-text text-xs mt-1">{award.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTAs */}
      <section className="bg-blush py-12 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/contact" className="card text-center border border-pink-100 hover:border-primary/30 group">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold text-dark-text mb-1">WhatsApp Us</h3>
              <p className="text-body-text text-sm mb-2">Chat directly about opportunities</p>
              <span className="text-primary font-semibold text-sm">Chat Now →</span>
            </Link>
            <Link href="/contact" className="card text-center border border-pink-100 hover:border-primary/30 group">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-dark-text mb-1">Call Us</h3>
              <p className="text-body-text text-sm mb-2">+91 8074501300</p>
              <span className="text-primary font-semibold text-sm">Call Now →</span>
            </Link>
            <Link href="/contact" className="card text-center border border-pink-100 hover:border-primary/30 group">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-bold text-dark-text mb-1">Book a Meeting</h3>
              <p className="text-body-text text-sm mb-2">Schedule an interview or discussion</p>
              <span className="text-primary font-semibold text-sm">Book Now →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge mb-4 mx-auto w-fit">APPLY NOW</span>
            <h2 className="section-title">Apply for a Position</h2>
            <p className="text-body-text mt-3">Fill in the form below and our team will review your application.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-1.5">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm bg-white text-dark-text placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-1.5">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm bg-white text-dark-text placeholder-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-1.5">
                  Phone Number <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 80745 01300"
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm bg-white text-dark-text placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-1.5">
                  Position Applied For <span className="text-primary">*</span>
                </label>
                <select
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm bg-white text-dark-text"
                >
                  <option value="">Select a position</option>
                  <option value="clinical-dietitian">Clinical Dietitian</option>
                  <option value="nutrition-intern">Nutrition Intern</option>
                  <option value="research-assistant">Research Assistant</option>
                  <option value="content-creator">Content Creator</option>
                  <option value="social-media-manager">Social Media Manager</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-1.5">
                  Total Work Experience <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g. 2 years, Fresher"
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm bg-white text-dark-text placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-1.5">
                  Current Location <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, State"
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm bg-white text-dark-text placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-dark-text mb-1.5">
                Upload Resume
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm bg-white text-dark-text file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-primary hover:file:bg-pink-100"
              />
              {resumeFile && <p className="text-xs text-primary mt-1">✓ {resumeFile.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-dark-text mb-1.5">
                Why do you want to work with us?
              </label>
              <textarea
                name="whyUs"
                rows={4}
                value={formData.whyUs}
                onChange={handleChange}
                placeholder="Tell us why you're passionate about clinical nutrition and why you want to join our team..."
                className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm bg-white text-dark-text placeholder-gray-400 resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-4 h-4 accent-primary mt-0.5 flex-shrink-0"
              />
              <label htmlFor="consent" className="text-sm text-body-text">
                By submitting this form, you agree to our{' '}
                <span className="text-primary font-semibold cursor-pointer hover:underline">
                  Privacy Policy
                </span>{' '}
                and consent to us storing your information for recruitment purposes.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting Application...
                </>
              ) : (
                'Apply Now →'
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-blush py-16 text-center border-t border-pink-100">
        <div className="max-w-3xl mx-auto px-4">
          <span className="badge mb-4 mx-auto w-fit">STAY INSPIRED DAILY</span>
          <h2 className="section-title mb-4">Follow Us on Instagram</h2>
          <p className="text-body-text mb-6">
            Follow{' '}
            <span className="text-primary font-semibold">@ags_nourish_hub</span>{' '}
            for nutrition tips, recipes, and transformation stories.
          </p>
          <a
            href="https://www.instagram.com/ags_nourish_hub?igsh=MXkwdDFrOXV0ZnplcQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            Follow @ags_nourish_hub
          </a>
        </div>
      </section>
    </div>
  )
}
