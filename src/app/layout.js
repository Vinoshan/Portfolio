import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Vino's Portfolio",
  description: 'A brief description of your skills and expertise. Highlight key projects and achievements.',
  keywords: 'Web Developer, Front-end Developer, React.js, JavaScript, UI/UX Design, Portfolio, GitHub, Responsive Design, Software Engineer, Coding Projects'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
