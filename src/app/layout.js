import './globals.css';
import Navbar from '../components/layout/Navbar';

export const metadata = {
  title: 'EduSync - School Management Platform',
  description: 'A comprehensive school management platform connecting administrators, teachers, students, and parents through a unified dashboard.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
