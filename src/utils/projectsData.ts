type projectsDataTypes = {
  id: string;
  type: 'work' | 'personal';
  image: string;
  tech: string[];
  title: string;
  summary: string;
  description: string;
  instagram?: string;
  github?: string;
  livepage?: string;
}[];

export const projectsData: projectsDataTypes = [
  {
    id: '2',
    type: 'work',
    image:
      'https://res.cloudinary.com/josefggx-cloud/image/upload/v1668034891/Portfolio/Project1_u6ruzu.png',
    tech: ['react native', 'typescript', 'redux', 'node'],
    title: 'AceMate',
    summary:
      "AceMate is a virtual tennis platform that allows athletes and trainers to create matches and make court reservations quickly and effectively. This is the last project I've been working on in ZanaCode, developed using React Native.",
    description: '',
    instagram: 'https://www.instagram.com/acemate.col/',
    livepage: '/acemate.png',
  },
  {
    id: '1',
    type: 'personal',
    image:
      'https://res.cloudinary.com/josefggx-cloud/image/upload/v1668034897/Portfolio/Project2_cm94v3.jpg',
    tech: ['react', 'typescript', 'sass'],
    title: 'Personal Portfolio',
    summary:
      'My portfolio started with the idea of ​​being a simple project that would serve to show my other projects. But, while I was doing it, it became a project in itself. I like to think it tells a bit about my story, style, and passion.',
    description: '',
    github: 'https://github.com/josefggx/Portfolio',
    livepage: 'https://josegutierrez.live',
  },
];
