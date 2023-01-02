import React from 'react';
import {Switch, Text, View} from 'react-native';

import {Card, SuitsFlagEnum, suitsFlagToString} from '../lib';

const Toggles = ({
  cards,
  isSortEnabled,
  setIsSortEnabled,
  filterSuits,
  toggleSuit,
}: {
  cards?: Card[];
  isSortEnabled: boolean;
  setIsSortEnabled: (val: boolean) => void;
  filterSuits: SuitsFlagEnum;
  toggleSuit: (val: SuitsFlagEnum) => void;
}) => {
  if (!cards || cards.length < 1) {
    return null;
  }

  const SuitToggle = ({suit}: {suit: SuitsFlagEnum}) => {
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
        <SuitToggle suit={SuitsFlagEnum.Hearts} />
        <SuitToggle suit={SuitsFlagEnum.Clubs} />
        <SuitToggle suit={SuitsFlagEnum.Diamonds} />
        <SuitToggle suit={SuitsFlagEnum.Spades} />
      </View>
    </View>
  );
};

export default Toggles;
