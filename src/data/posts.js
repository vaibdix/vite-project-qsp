import gettingStarted from '../content/getting-started.md?raw';
import tailwindGuide from '../content/tailwind-guide.md?raw';
import reconcilation from '../content/reconcilation.md?raw';

export const posts = [
  {
    id: '1',
    title: 'Getting Started with React',
    content: gettingStarted,
    excerpt: 'Learn the fundamentals of React and start building modern web applications.',
    date: '2024-03-15',
    author: 'John Doe',
    imageUrl:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS',
    content: tailwindGuide,
    excerpt:
      'Discover the power of Tailwind CSS and learn how to build beautiful user interfaces efficiently.',
    date: '2024-03-14',
    author: 'Jane Smith',
    imageUrl:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '3',
    title: 'reconcilation',
    content: reconcilation,
    excerpt: 'Learn the fundamentals of reconcilation.',
    date: '2024-03-15',
    author: 'John Doe',
    imageUrl:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
  },
];
