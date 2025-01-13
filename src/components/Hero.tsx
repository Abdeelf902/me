import { Github, Linkedin, Mail, FileText } from 'lucide-react';
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
    <section className="h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Container className="flex flex-col items-center text-center space-y-8">
        <div>
          <img
            src={PROFILE_IMAGE}
            alt="Abderrahmane El Farouah"
            className="w-36 h-36 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Abderrahmane El Farouah
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Développeur Web & AS 400
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            title="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <button
            onClick={handleDownloadCV}
            className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
            title="Télécharger mon CV"
          >
            <FileText size={22} />
          </button>
          <a
            href={`mailto:${SOCIAL_LINKS.EMAIL}`}
            className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
            title="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </Container>
    </section>
  );
}