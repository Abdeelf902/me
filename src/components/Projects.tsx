import { PROJECT_IMAGES } from '../utils/images';
import Container from './shared/Container';
import SectionTitle from './shared/SectionTitle';
import ProjectCard from './projects/ProjectCard';

const projects = [
  {
    title: 'Chi Fu Mi',
    description: 'Un jeu classique de pierre-papier-ciseaux développé avec JavaScript.',
    link: 'https://abdeelfarouah.github.io/chifoumi/',
    github: 'https://github.com/Abdeelf902/chifoumi',
    image: PROJECT_IMAGES.CHIFOUMI,
  },
  {
    title: 'Pokédex',
    description: 'Une application web présentant les 151 premiers Pokémon avec leurs caractéristiques.',
    link: 'https://abdeelfarouah.github.io/pokemon-discovery/',
    github: 'https://github.com/Abdeelf902/pokemon-discovery',
    image: PROJECT_IMAGES.POKEDEX,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <SectionTitle>Projets</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}