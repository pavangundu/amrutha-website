import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Amrutha Gelli | Clinical Dietitian in Hyderabad | AIG Hospitals',
  description: 'Sri Hitha Naga Sai Amrutha Gelli is a Clinical Dietitian at AIG Hospitals, Hyderabad. Expert in clinical disease management, gut health, PCOS, diabetes, paediatric nutrition and microbiome-targeted dietary solutions. MSc Nutrition & Dietetics, GPA 8.8/10.',
  keywords: 'clinical dietitian hyderabad, amrutha gelli, AIG hospitals dietitian, PCOS nutrition, diabetes diet plan, gut health nutritionist, microbiome nutrition, weight management hyderabad',
  authors: [{ name: 'Sri Hitha Naga Sai Amrutha Gelli' }],
  openGraph: {
    title: 'Amrutha Gelli | Clinical Dietitian in Hyderabad',
    description: 'Expert Clinical Dietitian at AIG Hospitals, Hyderabad. Personalized diet plans for diabetes, PCOS, gut health, and more.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-dmsans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1A1A2E',
              color: '#fff',
              borderRadius: '12px',
              padding: '16px 20px',
            },
            success: {
              iconTheme: {
                primary: '#E91E8C',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
