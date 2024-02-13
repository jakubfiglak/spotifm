import { citySchema } from './city';
import { z } from 'zod';

export const venueSchema = z.object({
	id: z.string(),
	name: z.string(),
	city: citySchema,
	url: z.string().url()
});

export type Venue = z.infer<typeof venueSchema>;
