import { z } from 'zod';
import { artistSchema } from './artist';
import { venueSchema } from './venue';
import { tourSchema } from './tour';
import { setSchema } from './set';

export const setlistSchema = z.object({
	id: z.string(),
	artist: artistSchema,
	venue: venueSchema,
	tour: tourSchema,
	sets: z.object({ set: z.array(setSchema) }),
	info: z.string().optional(),
	url: z.string().url().optional(),
	versionId: z.string(),
	eventDate: z.string(),
	lastUpdated: z.string()
});

export type Setlist = z.infer<typeof setlistSchema>;
