import './globals.css';

export const metadata = {
  title: 'Computer Engineering Portfolio',
  description: 'The portfolio of a Computer Engineering graduate. Coming soon.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
