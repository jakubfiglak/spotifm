import { z } from 'zod';

export const citySchema = z.object({
	id: z.string(),
	name: z.string(),
	stateCode: z.string().optional(),
	state: z.string().optional(),
	coords: z.object({
		long: z.number(),
		lat: z.number()
	}),
	country: z.object({
		code: z.string(),
		name: z.string()
	})
});

export type City = z.infer<typeof citySchema>;
