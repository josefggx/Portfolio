type projectsDataTypes = {
  id: string;
  type: 'work' | 'personal';
  image: string;
  tech: string[];
  title: string;
  summary: string;
  description: string;
}[];

export const projectsData: projectsDataTypes = [
  {
    id: '2',
    type: 'work',
    image:
      'https://res.cloudinary.com/josefggx-cloud/image/upload/v1667612430/Portfolio/301436521_131834572902915_514818785872804505_n_k8vjil.png',
    tech: ['react native', 'typescript', 'redux', 'node'],
    title: 'AceMate',
    summary:
      'Non fugiat ad esse sit exercitation ex. Adipisicing eiusmod quis consequat ea deserunt duis aliqua do est. Labore adipisicing voluptate dolore proident excepteur est esse et. Est adipisicing aliqua officia commodo qui reprehenderit fugiat irure voluptate cupidatat ullamco ipsum aliquip. Excepteur consectetur sint fugiat ipsum consectetur amet id incididunt non quis labore deserunt quis ut.',
    description:
      'Ea fugiat nisi enim eiusmod commodo eiusmod sit veniam commodo sint nulla cupidatat. Eiusmod officia dolor irure magna consectetur officia officia nulla sunt irure. Mollit aliqua officia mollit consectetur exercitation. Culpa enim et proident est magna id culpa enim. Sit voluptate culpa nisi nisi nostrud nostrud tempor elit ipsum in dolor. Ad Lorem ut officia in nisi amet enim dolore elit voluptate ipsum officia. Ut nostrud duis deserunt id. Proident ex sunt reprehenderit irure cillum aliquip aute aliqua dolor. Quis ut laborum ea qui quis deserunt labore enim eu. Eu culpa id commodo aute reprehenderit sit fugiat. Sit sint culpa consequat anim veniam.',
  },
  {
    id: '1',
    type: 'personal',
    image:
      'https://res.cloudinary.com/josefggx-cloud/image/upload/v1667612506/Portfolio/Data_architect_INESDI_1_larerg.jpg',
    tech: ['react', 'typescript', 'sass'],
    title: 'Personal Portfolio',
    summary:
      'Non fugiat ad esse sit exercitation ex. Adipisicing eiusmod quis consequat ea deserunt duis aliqua do est. Labore adipisicing voluptate dolore proident excepteur est esse et. Est adipisicing aliqua officia commodo qui reprehenderit fugiat irure voluptate cupidatat ullamco ipsum aliquip. Excepteur consectetur sint fugiat ipsum consectetur amet id incididunt non quis labore deserunt quis ut.',
    description:
      'Ea fugiat nisi enim eiusmod commodo eiusmod sit veniam commodo sint nulla cupidatat. Eiusmod officia dolor irure magna consectetur officia officia nulla sunt irure. Mollit aliqua officia mollit consectetur exercitation. Culpa enim et proident est magna id culpa enim. Sit voluptate culpa nisi nisi nostrud nostrud tempor elit ipsum in dolor. Ad Lorem ut officia in nisi amet enim dolore elit voluptate ipsum officia. Ut nostrud duis deserunt id. Proident ex sunt reprehenderit irure cillum aliquip aute aliqua dolor. Quis ut laborum ea qui quis deserunt labore enim eu. Eu culpa id commodo aute reprehenderit sit fugiat. Sit sint culpa consequat anim veniam.',
  },
];
