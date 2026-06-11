import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const material = z.object({
  title: z.string(),
  subject: z.enum(['micro', 'maths', 'probability']),
  topic: z.string(),
  summary: z.string().optional(),
  order: z.number().default(0),
  draft: z.boolean().default(false),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: material,
});

const problemSets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/problem-sets' }),
  schema: material,
});

export const collections = { notes, problemSets };
