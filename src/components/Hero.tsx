import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { put } from "@vercel/blob";

export default function Hero() {
  const [imageUrl, setImageUrl] = useState(
    "https://via.placeholder.com/150https://ludogildq8s3djil.public.blob.vercel-storage.com/cv2025-Photoroom-aY1edINZOjOE6KQVyBZX3vzEjpXVoL.jpg" // Placeholder pour l'image
  );

  useEffect(() => {
    const uploadBlob = async () => {
      try {
        const result = await put("articles/blob.img", "Hello World!", {
          access: "public",
          token: process.env.BLOB_READ_WRITE_TOKEN // Ajout du token
        });
        setImageUrl(result.url); // Stocke l'URL dans l'état
      } catch (error) {
        console.error("Erreur lors de l'upload du blob :", error);
      }
    };

    uploadBlob(); // Exécute l'upload au chargement
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        <div className="mb-8">
          <img
            src={imageUrl} // Utilise l'image uploadée ou un placeholder
            alt="Abderrahmane El Farouah"
            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Abderrahmane El Farouah
        </h1>

        <p className="text-xl text-gray-600 mb-8">Développeur Web/AS 400</p>

        <div className="flex space-x-4 mb-8">
          <a
            href="https://github.com/abdeelfarouah/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://fr.linkedin.com/in/abderrahmaneelfarouah"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:abderrahmane.elfarouah@laposte.net"
            className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>

        <a
          href="#projects"
          className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Voir mes projets
        </a>
      </div>
    </section>
  );
}
