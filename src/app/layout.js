import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from '@/components/bootstrapClient/BootstrapClient';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bennu',
  description: 'En Bennu te ayudamos a crear soluciones informáticas junto con mantener y actualizar tus sistemas.',
  keywords: [
    'optimización de procesos',
    'consultora tecnológica',
    'innovación tecnológica',
    'actualización de sistemas',
    'cloud computing',
    'gestión de proyectos de TI',
    'integración de sistemas',
    'servicio de consultoría',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BootstrapClient />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
