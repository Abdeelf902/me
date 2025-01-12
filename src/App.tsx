import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <ThemeProvider>
      <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors overflow-hidden">
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 overflow-hidden">
          <div className="h-full animate-fade-in">
            {renderContent()}
          </div>
        </main>
        
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} Abderrahmane El Farouah</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}