import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Contact
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="mailto:abderrahmane.elfarouah@laposte.net"
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Mail size={32} className="text-red-600 dark:text-red-500 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                abderrahmane.elfarouah@laposte.net
              </p>
            </a>
            
            <a
              href="https://github.com/Abdeelf902/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Github size={32} className="text-gray-900 dark:text-white mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">GitHub</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                github.com/Abdeelf902
              </p>
            </a>
            
            <a
              href="https://fr.linkedin.com/in/abderrahmaneelfarouah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={32} className="text-blue-600 dark:text-blue-500 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Voir mon profil LinkedIn
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}