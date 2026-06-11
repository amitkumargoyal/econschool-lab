// Interactive visualisers live as self-contained HTML files in /public/tools.
// To add one: drop the file in public/tools/<subject>/ and add an entry below.
// Tools open in a new tab so the diagram gets the full window.

export interface Tool {
  subject: 'micro' | 'maths' | 'probability';
  topic: string;
  title: string;
  file: string; // path under /public, no leading slash
  description: string;
}

export const tools: Tool[] = [
  {
    subject: 'micro',
    topic: 'Preferences and demand',
    title: 'Convex preferences — UMP & EMP',
    file: 'tools/micro/convex_preferences_visualiser.html',
    description:
      'Four convex utility functions; interior tangencies, kinks, and corners under both utility maximisation and expenditure minimisation.',
  },
  {
    subject: 'micro',
    topic: 'Preferences and demand',
    title: 'Non-convex preferences — UMP & EMP',
    file: 'tools/micro/non_convex_preferences_visualiser.html',
    description:
      'Four non-convex utility functions; why tangency fails and the optimum jumps to a corner.',
  },
  {
    subject: 'micro',
    topic: 'Preferences and demand',
    title: 'Satiated preferences — UMP & EMP',
    file: 'tools/micro/satiated_preferences_visualiser.html',
    description:
      'Bliss-point utility under Euclidean and taxicab metrics, with movable satiation point.',
  },
];
