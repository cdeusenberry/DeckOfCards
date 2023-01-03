import {z} from 'zod';

const Card = z.object({
  code: z.string(),
  image: z.string(),
  images: z.object({
    svg: z.string(),
    png: z.string(),
  }),
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

export const Deck = CardCollection.omit({cards: true}).extend({
  shuffled: z.boolean(),
});

export enum SuitsFlagEnum {
  Hearts = 1,
  Clubs = 2,
  Diamonds = 4,
  Spades = 8,
  All = 15,
}

export enum SuitsEnum {
  Hearts = 'HEARTS',
  Clubs = 'CLUBS',
  Diamonds = 'DIAMONDS',
  Spades = 'SPADES',
}
