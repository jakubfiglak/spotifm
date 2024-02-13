import { z } from 'zod';
import { songSchema } from './song';

export const setSchema = z.object({
	name: z.string().optional(),
	encore: z.number().optional(),
	song: z.array(songSchema)
});

export type Set = z.infer<typeof setSchema>;
