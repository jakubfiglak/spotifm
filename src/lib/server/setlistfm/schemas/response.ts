import { z } from 'zod';
import { setlistSchema } from './setlist';

export const setlistsResponseSchema = z.object({
	setlist: z.array(setlistSchema),
	total: z.number(),
	page: z.number(),
	itemsPerPage: z.number()
});
