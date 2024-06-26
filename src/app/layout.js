import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/component';
import Footer from '@/components/footer/component';

const montserrat = Inter({ subsets: ['latin'], textWrap: 'wrap' });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html style={{ scrollBehavior: 'smooth' }} lang="ru">
      <body className={(montserrat.className, 'max-w-[1920]')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
