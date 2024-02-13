import { z } from 'zod';
import { artistSchema } from './artist';

export const songSchema = z.object({
	name: z.string(),
	with: artistSchema.optional(),
	cover: artistSchema.optional(),
	info: z.string().optional(),
	tape: z.boolean().optional()
});

export type Song = z.infer<typeof songSchema>;
