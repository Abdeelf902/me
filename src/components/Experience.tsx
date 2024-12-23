const experiences = [
  {
    title: 'START ZUP',
    period: 'Septembre 2023 - Mars 2024',
    type: 'Formation',
    skills: [
      'Git', 'Frameworks PHP', 'HTML5', 'CSS3', 'JavaScript',
      'React.js', 'Linux', 'VirtualBox', 'Responsive Design',
    ],
  },
  {
    title: "O'clock",
    period: 'Mai 2022 - Octobre 2022',
    type: 'Formation',
    skills: [
      'Git', 'PHP', 'HTML5', 'JavaScript', 'Responsive Design',
      'Salesforce', 'Power BI', 'Talend',
    ],
  },
  {
    title: "Assistant d'éducation",
    period: 'Septembre 2017 - Octobre 2019',
    type: 'Expérience professionnelle',
    skills: [
      'Médiation', 'Soutien scolaire', 'Travail d\'équipe',
      'Bureautique', 'Pack Office', 'Gestion de projet',
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Parcours professionnel
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600">{exp.period}</p>
                </div>
                <span className="inline-block px-3 py-1 mt-2 md:mt-0 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {exp.type}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-100 rounded text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
