const skills = {
  technical: [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'PHP', level: 75 },
    { name: 'React.js', level: 70 },
    { name: 'Angular', level: 65 },
  ],
  professional: [
    'Git',
    'Linux',
    'Windows',
    'Pack Office',
    'EBP Comptabilité',
    'EBP Gestion commerciale',
  ],
  soft: [
    'Résilience',
    'Esprit d\'équipe',
    'Créativité',
    'Empathie',
    'Management inclusif',
    'Assertivité',
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Compétences
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Compétences techniques
            </h3>
            <div className="space-y-4">
              {skills.technical.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Compétences professionnelles
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {skills.professional.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {skills.soft.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}