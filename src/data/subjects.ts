export interface Subject {
  id: 'micro' | 'maths' | 'probability';
  title: string;
  blurb: string;
}

export const subjects: Subject[] = [
  {
    id: 'micro',
    title: 'Microeconomics',
    blurb:
      'Consumer theory, producer theory, equilibrium, and market structure — interactive diagrams alongside notes and problem sets.',
  },
  {
    id: 'maths',
    title: 'Mathematics',
    blurb:
      'Analysis, linear algebra, and optimisation for economics — the toolkit behind the models.',
  },
  {
    id: 'probability',
    title: 'Probability & Statistics',
    blurb:
      'Probability theory, distributions, and statistical inference, built up with the rigor graduate programs expect.',
  },
];
