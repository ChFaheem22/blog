import './globals.css';
import Navbar from './components/navbar';
import ThemeProvider from './context/ThemeContext';

export const metadata = {
  title: 'Faheem Blogs',
  description: 'Blogs Website built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <div className="fade-in">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
