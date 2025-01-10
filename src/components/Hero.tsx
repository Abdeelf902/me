import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { PROFILE_IMAGE } from '../utils/images';
import { SOCIAL_LINKS } from '../utils/constants';
import Container from './shared/Container';
import { useCallback } from 'react';
import jsPDF from 'jspdf';

export default function Hero() {
  const handleDownloadCV = useCallback(async () => {
    try {
      // Téléchargez l'image à partir de l'URL
      const response = await fetch(SOCIAL_LINKS.CV_URL);
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);

      // Chargez l'image avec ses dimensions natives
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [img.width, img.height], // Utiliser la résolution native de l'image
        });

        // Ajoutez l'image en pleine qualité
        pdf.addImage(img, 'JPEG', 0, 0, img.width, img.height);

        // Téléchargez le PDF
        pdf.save('CV_Abderrahmane_El_Farouah_DEV.pdf');
        URL.revokeObjectURL(imageUrl);
      };
    } catch (error) {
      console.error('Erreur lors de la création du PDF HD:', error);

      // Fallback : Ouvrir l'image directement si le PDF échoue
      window.open(SOCIAL_LINKS.CV_URL, '_blank');
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
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
            title="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <button
            onClick={handleDownloadCV}
            className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center justify-center"
            title="Télécharger mon CV"
          >
            <FileText size={24} className="mr-2" />
            Télécharger le CV
          </button>
          <a
            href={`mailto:${SOCIAL_LINKS.EMAIL}`}
            className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
            title="Email"
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
