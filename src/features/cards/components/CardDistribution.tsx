import React from 'react';
import {Text, View} from 'react-native';

import {Card, Suit, suitsEnumToString} from 'deckofcardslib';

const CardDistribution = ({cards}: {cards?: Card[]}) => {
  if (!cards || cards.length === 0) {
    return null;
  }

  // Object allows for easier count incrementing.
  const suitCountMap = new Map<Suit, {count: number}>([
    [Suit.Enum.HEARTS, {count: 0}],
    [Suit.Enum.CLUBS, {count: 0}],
    [Suit.Enum.DIAMONDS, {count: 0}],
    [Suit.Enum.SPADES, {count: 0}],
  ]);

  cards.forEach(card => {
    const counter = suitCountMap.get(card.suit);
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
