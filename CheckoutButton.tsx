import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SinzNation | Discipline. Motivation. Legacy.',
  description: 'Motivation, gym discipline, reels, and apparel for SinzNation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
