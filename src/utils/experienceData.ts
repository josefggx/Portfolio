type experienceDataTypes = {
  id: string;
  order: number;
  title: string;
  type: 'Job' | 'Education';
  dates: string;
  duties: string[];
  company: string;
}[];

export const experienceData: experienceDataTypes = [
  {
    id: '4',
    order: 4,
    title: 'Front-End Developer',
    type: 'Job',
    dates: 'May 2022 - Present',
    duties: [
      "The tech stack I've worked with at ZanaCode includes React, React Native, TypeScript, Redux, CSS, Node, etc.",
      'Working in a team with 7 developers on AceMate. A mobile app that is being built in React Native.',
      'Among my responsibilities are translating the designs made by the designers on Figma into quality code, with their respective tests, and following an Agile work methodology.',
      'I had the opportunity to receive feedback from developers with a lot of experience in mobile development, and to teach a little bit of React and TS to the new talents that entered the company as trainees, by doing peer programming.',
    ],
    company: 'ZANACODE',
  },
  {
    id: '3',
    order: 3,
    title: 'Junior Project Manager',
    type: 'Job',
    dates: 'Feb 2021 - Feb 2022',
    duties: [
      'Market research on the adoption of pets in Colombia, the different shelters, programs, and specialized mobile apps.',
      'Planning and initial prototype of a pet adoption mobile app, working hand in hand with the UX Designers.',
      'Responsible for carrying out the daily ceremonies and following an agile methodology during the project. It was a great experience working with developers and understanding the profession from a planning point of view.',
    ],
    company: 'HOPETS',
  },
  {
    id: '2',
    order: 2,
    title: 'Systems Engineering',
    type: 'Education',
    dates: 'Jan 2015 - Pending',
    duties: [
      "It was my first formal approach to programming, where I discovered that it is my passion and it's what I want to focus my professional career on.",
      'It has been very useful, since learning the basics of programming has made it easier for me to learn new programming languages ??????and technologies. I also developed my mathematical thinking skills by taking subjects like linear algebra, calculus, and physics.',
      'Although most of my relevant skills have been self-taught, I highlight learning the fundamentals of OOP, Data Structures and Algorithms.',
    ],
    company: 'UNINORTE',
  },
  {
    id: '1',
    order: 1,
    title: 'Business Administration',
    type: 'Education',
    dates: 'Jan 2015 - Sep 2020',
    duties: [
      'Upon graduation, I had my first experience as a professional, working for a year at the college as an Administrative and Financial Assistant.',
      'Studying Business Administration has been very useful for my soft-skills development, and it helped me to obtain deeper knowledge about organizational processes in general. It has been a great help in my work as a Software Developer.',
      'I was a member of the team that led the Student Social Responsibility project of the University, whose purpose was to evaluate and compare behaviors socially responsible in university students from Colombia, M??xico, and Per??.',
    ],
    company: 'UNINORTE',
  },
];
