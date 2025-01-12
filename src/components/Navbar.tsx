import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { NAV_IMAGE } from '../utils/images';
interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'projects', label: 'Projets' },
    { id: 'skills', label: 'Compétences' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    onTabChange(id);
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
          <span className="absolute top-0 left-0 p-0">
  <img src={NAV_IMAGE} className="w-16 h-16" alt="Logo" />
</span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all
                    ${activeTab === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium
                  ${activeTab === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}