import { z } from 'zod';

const Card = z.object({
    code: z.string(),
    image: z.string(),
    images: z.object(
        {
            svg: z.string(),
            png: z.string(),
        }
    ),
    value: z.string(),
    suit: z.string(),
});

export type Card = z.infer<typeof Card>;

export const CardCollection = z.object({
    success: z.boolean(),
    deck_id: z.string(),
    cards: Card.array(),
    remaining: z.number(),
});

export const Deck = z.object({
    success: z.boolean(),
    deck_id: z.string(),
    shuffled: z.boolean(),
    remaining: z.number(),
});