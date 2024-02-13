import { z } from 'zod';

export const artistSchema = z.object({
	mbid: z.string(),
	tmid: z.number().optional(),
	name: z.string(),
	sortName: z.string(),
	disambiguation: z.string(),
	url: z.string().url()
});

export type Artist = z.infer<typeof artistSchema>;
