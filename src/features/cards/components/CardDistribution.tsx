import React from 'react';
import {Text, View} from 'react-native';

import {Card, SuitsEnum, suitsEnumToString} from '../lib';

const CardDistribution = ({cards}: {cards?: Card[]}) => {
  if (!cards || cards.length === 0) {
    return null;
  }

  // Object allows for easier count incrementing.
  const suitCountMap = new Map<SuitsEnum, {count: number}>([
    [SuitsEnum.Hearts, {count: 0}],
    [SuitsEnum.Clubs, {count: 0}],
    [SuitsEnum.Diamonds, {count: 0}],
    [SuitsEnum.Spades, {count: 0}],
  ]);

  cards.forEach(card => {
    const counter = suitCountMap.get(card.suit as SuitsEnum);
    if (counter) {
      counter.count++;
    }
  });

  return (
    <View style={{marginBottom: 15}}>
      <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
        Distributions
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        {[...suitCountMap.entries()].map(entry => (
          <View key={entry[0]}>
            <Text>{suitsEnumToString(entry[0])}</Text>
            <Text>{entry[1].count}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CardDistribution;
