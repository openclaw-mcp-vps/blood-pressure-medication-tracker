import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BP Tracker — Blood Pressure Medication Tracker',
  description: 'Track blood pressure medication effectiveness over time. Log BP readings, medication timing, and side effects to identify optimal dosing patterns.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3a03fcbd-347f-4142-89ec-a27859cd52c7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
