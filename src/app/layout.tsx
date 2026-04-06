import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motion Harbour Physio',
  description: 'Modern physiotherapy for pain relief, movement, and confident return to daily life.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
