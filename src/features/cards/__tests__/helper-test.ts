import {suitsFlagToString, suitsEnumToString} from '../lib/helpers';
import {Suit, SuitFlag} from '../lib/types';

// Showing where in the app structure tests should go (local to the feature)
it('transllates flags to strings', () => {
  expect(suitsFlagToString(SuitFlag.Clubs)).toBe('Clubs');
});

it('translates enum to strings', () => {
  expect(suitsEnumToString(Suit.Enum.SPADES)).toBe('Spades');
});
