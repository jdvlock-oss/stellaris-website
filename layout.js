import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://stellarisai.com'),
  title: { default: 'Stellaris | Redesign work for the AI era', template: '%s | Stellaris' },
  description: 'Stellaris helps organizations turn AI ambition into practical strategy, redesigned workflows, intelligent automation, and measurable business outcomes.',
  openGraph: { title: 'Stellaris', description: 'Redesign work for the AI era.', images: ['/og-image.png'], type: 'website' },
  icons: { icon: '/favicon.svg' }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><div className="noise"/><Header />{children}<Footer /></body></html>;
}
