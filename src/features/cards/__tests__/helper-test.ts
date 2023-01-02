import {suitsFlagToString, suitsEnumToString} from '../lib/helpers';
import {SuitsFlagEnum, SuitsEnum} from '../lib/types';

// Showing where in the app structure tests should go (local to the feature)
it('transllates flags to strings', () => {
  expect(suitsFlagToString(SuitsFlagEnum.Clubs)).toBe('Clubs');
});

it('translates enum to strings', () => {
  expect(suitsEnumToString(SuitsEnum.Spades)).toBe('Spades');
});
