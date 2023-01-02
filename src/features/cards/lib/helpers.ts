import {Card, SuitsFlagEnum, SuitsEnum} from './types';

export const suitsFlagToString = (suit: SuitsFlagEnum) => {
  switch (suit) {
    case SuitsFlagEnum.Hearts:
      return 'Hearts';
    case SuitsFlagEnum.Clubs:
      return 'Clubs';
    case SuitsFlagEnum.Diamonds:
      return 'Diamonds';
    case SuitsFlagEnum.Spades:
      return 'Spades';
    default:
      return 'Unknown';
  }
};

export const suitsEnumToString = (suit: SuitsEnum) => {
  switch (suit) {
    case SuitsEnum.Hearts:
      return 'Hearts';
    case SuitsEnum.Clubs:
      return 'Clubs';
    case SuitsEnum.Diamonds:
      return 'Diamonds';
    case SuitsEnum.Spades:
      return 'Spades';
    default:
      return 'Unknown';
  }
};

export const filterCardsBySuits = (cards: Card[], suits: SuitsFlagEnum) => {
  if (suits === SuitsFlagEnum.All) {
    return cards;
  }

  const validSuits: string[] = [];
  if (suits & SuitsFlagEnum.Hearts) {
    validSuits.push(SuitsEnum.Hearts);
  }

  if (suits & SuitsFlagEnum.Clubs) {
    validSuits.push(SuitsEnum.Clubs);
  }

  if (suits & SuitsFlagEnum.Diamonds) {
    validSuits.push(SuitsEnum.Diamonds);
  }

  if (suits & SuitsFlagEnum.Spades) {
    validSuits.push(SuitsEnum.Spades);
  }

  return cards.filter(card => validSuits.includes(card.suit));
};

// Order used here:
// Hearts A-K, Clubs A-K, Diamonds A-K, Spades A-K
export const sortCards = (cards: Card[]) => {
  cards.sort(compareCards);
};

const compareCards = (a: Card, b: Card) => {
  const value = compareSuits(a, b);

  if (value !== 0) {
    return value;
  }

  return compareValues(a, b);
};

const compareSuits = (a: Card, b: Card) => {
  if (a.suit === b.suit) {
    return 0;
  }

  if (a.suit === SuitsEnum.Hearts) {
    return -1;
  }

  if (b.suit === SuitsEnum.Hearts) {
    return 1;
  }

  // After Hearts it is alphabetical order
  return a.suit.localeCompare(b.suit);
};

const compareValues = (a: Card, b: Card) => {
  const aNumber = convertValueToNumber(a);
  const bNumber = convertValueToNumber(b);

  return aNumber - bNumber;
};

const convertValueToNumber = (a: Card) => {
  if (a.value === 'ACE') {
    return 1;
  }

  if (a.value === 'JACK') {
    return 11;
  }

  if (a.value === 'QUEEN') {
    return 12;
  }

  if (a.value === 'KING') {
    return 13;
  }

  return Number(a.value);
};
