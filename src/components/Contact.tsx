import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Contact
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="mailto:abderrahmane.elfarouah@laposte.net"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail size={32} className="text-red-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
              <p className="text-sm text-gray-600 text-center">
                abderrahmane.elfarouah@laposte.net
              </p>
            </a>
            
            <a
              href="https://github.com/abderrahamaneelfarouah/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Github size={32} className="text-gray-900 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">GitHub</h3>
              <p className="text-sm text-gray-600 text-center">
                github.com/abderrahmaneelfarouah
              </p>
            </a>
            
            <a
              href="https://fr.linkedin.com/in/abderrahmaneelfarouah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Linkedin size={32} className="text-blue-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-600 text-center">
                Voir mon profil LinkedIn
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
