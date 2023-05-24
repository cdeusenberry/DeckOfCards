import React from 'react';
import {Switch, Text, View} from 'react-native';

import {Card, SuitFlag, suitsFlagToString} from 'deckofcardslib';

const FilterToggles = ({
  cards,
  isSortEnabled,
  setIsSortEnabled,
  filterSuits,
  toggleSuit,
}: {
  cards?: Card[];
  isSortEnabled: boolean;
  setIsSortEnabled: (val: boolean) => void;
  filterSuits: SuitFlag;
  toggleSuit: (val: SuitFlag) => void;
}) => {
  if (!cards || cards.length < 1) {
    return null;
  }

  const SuitToggle = ({suit}: {suit: SuitFlag}) => {
    return (
      <View>
        <Text>{suitsFlagToString(suit)}</Text>
        <Switch
          trackColor={{true: '#00ff00'}}
          onValueChange={() => toggleSuit(suit)}
          value={(filterSuits & suit) > 0}
        />
      </View>
    );
  };

  return (
    <View style={{marginBottom: 15}}>
      <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
        Sort and Filters
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View>
          <Text>Sort</Text>
          <Switch
            trackColor={{true: '#00ff00'}}
            onValueChange={() => setIsSortEnabled(!isSortEnabled)}
            value={isSortEnabled}
          />
        </View>
        <SuitToggle suit={SuitFlag.Hearts} />
        <SuitToggle suit={SuitFlag.Clubs} />
        <SuitToggle suit={SuitFlag.Diamonds} />
        <SuitToggle suit={SuitFlag.Spades} />
      </View>
    </View>
  );
};

export default FilterToggles;
