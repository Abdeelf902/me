import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../utils/constants';
import Container from './shared/Container';
import { PROFILE_IMAGE } from '../utils/images';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <Container className="py-12 flex flex-col items-center text-center">
        <div className="mb-8">
          <img
            src={PROFILE_IMAGE}
            alt="Abderrahmane El Farouah"
            className="w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Abderrahmane El Farouah
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Développeur Web & AS 400
        </p>
        
        <div className="flex space-x-4 mb-8">
          <a
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={24} />
          </a>
           <a
            href="https://media.licdn.com/dms/image/v2/D4E1FAQGv9oIMkEKeCg/feedshare-document-images_800/B4EZQDQ_mTGYAg-/1/1735221575484?e=1737590400&v=beta&t=Eh1_cOFl4lGerv_nNi1GlNZmQVsIM61zWpbrJMy9bJg"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
            title="Télécharger mon CV"
          >
            <FileText size={24} />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.EMAIL}`}
            className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
        
        <a
          href="#projects"
          className="px-8 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
        >
          Voir mes projets
        </a>
      </Container>
    </section>
  );
}
