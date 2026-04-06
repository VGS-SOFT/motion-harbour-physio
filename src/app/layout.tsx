import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Motion Harbour Physio | Modern Physiotherapy Melbourne',
  description:
    'Modern physiotherapy for pain relief, movement, and confident return to daily life. Back pain, sports injuries, knee & shoulder rehab in Melbourne.',
  keywords: 'physiotherapy Melbourne, back pain physio, sports injury rehab, knee shoulder physio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
