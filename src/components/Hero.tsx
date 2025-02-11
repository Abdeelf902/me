import { Github, Linkedin, Mail, FileText, Download, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROFILE_IMAGE } from '../utils/images';
import { SOCIAL_LINKS } from '../utils/constants';
import Container from './shared/Container';
import { useCallback } from 'react';
import jsPDF from 'jspdf';

export default function Hero() {
  const handleDownloadCV = useCallback(async () => {
    try {
      const response = await fetch(SOCIAL_LINKS.CV_URL);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);

      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        // Create PDF with default A4 size
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });

        // Get page dimensions in mm
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        // Calculate image dimensions to fit page while maintaining aspect ratio
        const imgRatio = img.width / img.height;
        let finalWidth = pageWidth;
        let finalHeight = pageWidth / imgRatio;

        if (finalHeight > pageHeight) {
          finalHeight = pageHeight;
          finalWidth = pageHeight * imgRatio;
        }

        // Center the image on the page
        const x = (pageWidth - finalWidth) / 2;
        const y = (pageHeight - finalHeight) / 2;

        // Add image with best quality settings
        pdf.addImage(
          img,
          'JPEG',
          x,
          y,
          finalWidth,
          finalHeight,
          undefined,
          'FAST'
        );

        // Save the PDF
        pdf.save('CV_Abderrahmane_El_Farouah.pdf');
        URL.revokeObjectURL(imageUrl);
      };
    } catch (error) {
      console.error('Erreur lors de la création du PDF:', error);
      // Fallback: Open image directly if PDF creation fails
      window.open(SOCIAL_LINKS.CV_URL, '_blank');
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Container className="flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <img
              src={PROFILE_IMAGE}
              alt="Abderrahmane El Farouah"
              className="w-36 h-36 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
            />
            <motion.div
              className="absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Abderrahmane El Farouah
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Développeur Web & AS 400
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Passionné par le développement web et les systèmes legacy, 
            je crée des solutions innovantes qui allient technologie moderne et fiabilité.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors group"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            <span>Télécharger CV</span>
          </button>
          <a
            href={`mailto:${SOCIAL_LINKS.EMAIL}`}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          >
            <Mail size={20} />
            <span>Contact</span>
          </a>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={24} className="text-gray-400 dark:text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
