import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Contactez-moi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Informations de contact
              </h3>
              
              <div className="flex items-start space-x-4">
                <MapPin className="text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Localisation</p>
                  <p className="text-gray-600 dark:text-gray-300">France</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <a href="mailto:abderrahmane.elfarouah@laposte.net" 
                     className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    abderrahmane.elfarouah@laposte.net
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Réseaux sociaux
              </h3>
              
              <a
                href="https://github.com/Abdeelf902/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Github className="text-gray-900 dark:text-white" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">GitHub</p>
                  <p className="text-gray-600 dark:text-gray-300">@Abdeelf902</p>
                </div>
              </a>

              <a
                href="https://fr.linkedin.com/in/abderrahmaneelfarouah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                  <p className="text-gray-600 dark:text-gray-300">Abderrahmane El Farouah</p>
                </div>
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center text-gray-600 dark:text-gray-300"
          >
            <p>
              N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}