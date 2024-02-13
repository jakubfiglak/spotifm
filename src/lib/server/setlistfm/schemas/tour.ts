import { z } from 'zod';

export const tourSchema = z.object({
	name: z.string()
});

export type Tour = z.infer<typeof tourSchema>;
