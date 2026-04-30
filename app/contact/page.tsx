'use client'

import { useState, useEffect, useRef } from 'react'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser'

const contactMethods = [
  {
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    bg: 'bg-green-100',
    label: 'WhatsApp Us',
    value: '+91 8074501300',
    action: 'Chat Now →',
    href: 'https://wa.me/918074501300',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    bg: 'bg-pink-100',
    label: 'Call Us',
    value: '+91 8074501300',
    action: 'Call Now →',
    href: 'tel:+918074501300',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    bg: 'bg-teal-50',
    label: 'Email Us',
    value: 'sriamruthagelli@gmail.com',
    action: 'Email Now →',
    href: 'mailto:sriamruthagelli@gmail.com',
  },
]

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    weight: '',
    height: '',
    gender: '',
    anyConcern: '',
    medicalConcern: '',
    contactNumber: '',
    whatsappNumber: '',
    location: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    // Block alphabets in numeric/phone fields
    if (['contactNumber', 'whatsappNumber'].includes(name)) {
      if (!/^[\d+\-\s]*$/.test(value)) return
    }
    if (['age', 'weight', 'height'].includes(name)) {
      if (!/^\d*\.?\d*$/.test(value)) return
    }
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error on change
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (!/^[a-zA-Z\s.'-]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain letters'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }
    if (!formData.age) {
      newErrors.age = 'Age is required'
    } else if (Number(formData.age) < 1 || Number(formData.age) > 120) {
      newErrors.age = 'Enter a valid age (1–120)'
    }
    if (!formData.weight) {
      newErrors.weight = 'Weight is required'
    } else if (Number(formData.weight) < 1 || Number(formData.weight) > 500) {
      newErrors.weight = 'Enter a valid weight in kg'
    }
    if (!formData.height) {
      newErrors.height = 'Height is required'
    } else if (Number(formData.height) < 30 || Number(formData.height) > 300) {
      newErrors.height = 'Enter a valid height in cm'
    }
    if (!formData.gender) {
      newErrors.gender = 'Please select a gender'
    }
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required'
    } else if (formData.contactNumber.replace(/[\s+\-]/g, '').length < 7) {
      newErrors.contactNumber = 'Enter a valid phone number'
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      toast.error('Please fix the errors before submitting.')
      return
    }
    setLoading(true)
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          contact_number: formData.contactNumber,
          whatsapp_number: formData.whatsappNumber || 'Not provided',
          age: formData.age,
          gender: formData.gender,
          weight: formData.weight,
          height: formData.height,
          location: formData.location,
          medical_concern: formData.anyConcern === 'yes'
            ? formData.medicalConcern
            : 'None',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      toast.success('Thank you! We\'ll contact you shortly. 💖')
      setFormData({
        name: '', email: '', age: '', weight: '', height: '', gender: '',
        anyConcern: '', medicalConcern: '', contactNumber: '', whatsappNumber: '',
        location: '',
      })
    } catch (error) {
      console.error('EmailJS error:', error)
      toast.error('Something went wrong. Please try WhatsApp or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 border ${errors[field] ? 'border-red-400 bg-red-50' : 'border-pink-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm bg-white text-dark-text placeholder-gray-400`
  const errMsg = (field: string) =>
    errors[field] ? <p className="text-red-500 text-xs mt-1">{errors[field]}</p> : null

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-blush py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="badge mb-6 mx-auto w-fit">GET IN TOUCH</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-dark-text leading-tight mb-6">
            We&apos;re here to help you start your{' '}
            <span className="text-primary">health journey</span>{' '}
            with the right guidance.
          </h1>
          <p className="text-body-text text-lg">
            Contact Amrutha Gelli for expert nutrition counselling — personalized, evidence-based, life-changing.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white py-14 border-b border-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card border border-pink-100 hover:border-primary/30 group text-center"
              >
                <div className={`w-14 h-14 ${method.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <h3 className="font-bold text-dark-text mb-1">{method.label}</h3>
                <p className="text-body-text text-sm mb-3">{method.value}</p>
                <span className="text-primary font-semibold text-sm">{method.action}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section ref={formRef} className="bg-blush py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="badge mb-4 mx-auto w-fit">BOOK A CONSULTATION</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <div>
              <h2 className="section-title mb-2">One change today.</h2>
              <h2 className="section-title text-primary mb-6">A healthier you tomorrow.</h2>
              <p className="text-body-text mb-8 leading-relaxed">
                Book a consultation with Amrutha Gelli — your dedicated clinical dietitian. Get a personalized, evidence-based nutrition plan designed specifically for your health goals and lifestyle.
              </p>

              {/* Image placeholder */}
              <div className="w-full h-60 md:h-72 rounded-3xl bg-gradient-to-br from-pink-200 to-blush border-2 border-pink-200 flex items-center justify-center shadow-lg mb-6 overflow-hidden">
                <div className="text-center text-primary/40">
                  <div className="text-7xl mb-2">👩‍⚕️</div>
                  <p className="text-sm font-medium text-primary/60">Amrutha Gelli</p>
                </div>
              </div>

              <div className="space-y-3">
                {['Expert Clinical Nutritionist', 'Personalized Diet Plans', '24/7 Support & Follow-up'].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-dark-text font-medium text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-pink-100">
              <h3 className="font-playfair text-xl font-bold text-dark-text mb-6">Book a Consultation with Experts</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-dark-text mb-1.5">Name <span className="text-primary">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className={inputClass('name')} />
                    {errMsg('name')}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-dark-text mb-1.5">Email <span className="text-primary">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={inputClass('email')} />
                    {errMsg('email')}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-dark-text mb-1.5">Age <span className="text-primary">*</span></label>
                    <input type="text" inputMode="numeric" name="age" value={formData.age} onChange={handleChange} placeholder="Your age" className={inputClass('age')} />
                    {errMsg('age')}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-dark-text mb-1.5">Weight (kg) <span className="text-primary">*</span></label>
                    <input type="text" inputMode="decimal" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight in kg" className={inputClass('weight')} />
                    {errMsg('weight')}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-dark-text mb-1.5">Height (cm) <span className="text-primary">*</span></label>
                    <input type="text" inputMode="decimal" name="height" value={formData.height} onChange={handleChange} placeholder="Height in cm" className={inputClass('height')} />
                    {errMsg('height')}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-dark-text mb-1.5">Gender <span className="text-primary">*</span></label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className={inputClass('gender')}>
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errMsg('gender')}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-dark-text mb-1.5">Any Medical Concern?</label>
                  <div className="flex gap-4 mb-2">
                    {['Yes', 'No'].map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="anyConcern"
                          value={opt.toLowerCase()}
                          checked={formData.anyConcern === opt.toLowerCase()}
                          onChange={handleChange}
                          className="accent-primary"
                        />
                        <span className="text-sm text-dark-text">{opt}</span>
                      </label>
                    ))}
                  </div>
                  {formData.anyConcern === 'yes' && (
                    <input
                      type="text"
                      name="medicalConcern"
                      value={formData.medicalConcern}
                      onChange={handleChange}
                      placeholder="Please describe your medical condition"
                      className={inputClass('medicalConcern')}
                    />
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-dark-text mb-1.5">Contact Number <span className="text-primary">*</span></label>
                    <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputClass('contactNumber')} />
                    {errMsg('contactNumber')}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-dark-text mb-1.5">WhatsApp Number</label>
                    <input type="tel" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} placeholder="If different from above" className={inputClass('whatsappNumber')} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-dark-text mb-1.5">Your Location <span className="text-primary">*</span></label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="City, State" className={inputClass('location')} />
                  {errMsg('location')}
                </div>


                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Booking Consultation...
                    </>
                  ) : (
                    'Book a Consultation Now →'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>



      {/* Instagram CTA */}
      <section className="bg-white py-16 text-center border-t border-pink-50">
        <div className="max-w-3xl mx-auto px-4">
          <span className="badge mb-4 mx-auto w-fit">STAY INSPIRED DAILY</span>
          <h2 className="section-title mb-4">Follow Us on Instagram</h2>
          <p className="text-body-text mb-6">
            Follow{' '}
            <span className="text-primary font-semibold">@ags_nourish_hub</span>{' '}
            for nutrition tips, recipes, and transformation stories.
          </p>
          <a href="https://www.instagram.com/ags_nourish_hub?igsh=MXkwdDFrOXV0ZnplcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
            Follow @ags_nourish_hub
          </a>
        </div>
      </section>

      {/* Contact + Location */}
      <section className="bg-blush py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4 mx-auto w-fit">START YOUR TRANSFORMATION</span>
            <h2 className="section-title mb-4">
              Contact Amrutha Gelli for Expert Guidance
            </h2>
            <p className="text-body-text max-w-2xl mx-auto">
              The first step to a healthier you starts here. Book a diet consultation and talk to a nutrition expert now to begin your transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card border border-pink-100 hover:border-primary/30 group text-center"
              >
                <div className={`w-14 h-14 ${method.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <h3 className="font-bold text-dark-text mb-1">{method.label}</h3>
                <p className="text-body-text text-sm mb-3">{method.value}</p>
                <span className="text-primary font-semibold text-sm">{method.action}</span>
              </a>
            ))}
          </div>


        </div>
      </section>
    </div>
  )
}
