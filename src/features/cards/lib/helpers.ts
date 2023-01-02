import { Card } from './types';

export enum SuitsEnum {
    hearts = 1,
    clubs = 2,
    diamonds = 4,
    spades = 8,
    all = 15,
}

const HEARTS = 'HEARTS';
const CLUBS = 'CLUBS';
const DIAMONDS = 'DIAMONDS';
const SPADES = 'SPADES';

export const filterCardsBySuits = (cards: Card[], suits: SuitsEnum) => {
    if (suits === SuitsEnum.all) {
        return cards;
    }

    const validSuits: string[] = [];
    if (suits & SuitsEnum.hearts) {
        validSuits.push(HEARTS);
    }

    if (suits & SuitsEnum.clubs) {
        validSuits.push(CLUBS);
    }

    if (suits & SuitsEnum.diamonds) {
        validSuits.push(DIAMONDS);
    }

    if (suits & SuitsEnum.spades) {
        validSuits.push(SPADES);
    }

    return cards.filter(card => validSuits.includes(card.suit))
}

// Order used here:
// Hearts A-K, Clubs A-K, Diamonds A-K, Spades A-K
export const sortCards = (cards: Card[]) => {
    cards.sort(compareCards);
}

const compareCards = (a: Card, b: Card) => {
    const value = compareSuits(a, b);

    if (value !== 0) {
        return value;
    }

    return compareValues(a, b);
}

const compareSuits = (a: Card, b: Card) => {
    if (a.suit === b.suit) {
        return 0;
    }

    if (a.suit === HEARTS) {
        return -1;
    }

    if (b.suit === HEARTS) {
        return 1;
    }

    // After Hearts it is alphabetical order
    return a.suit.localeCompare(b.suit);
}

const compareValues = (a: Card, b: Card) => {
    const aNumber = convertValueToNumber(a);
    const bNumber = convertValueToNumber(b);

    return aNumber - bNumber;
}

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
}