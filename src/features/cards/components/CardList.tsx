import React from 'react';
import {Image, View} from 'react-native';

import {Card} from 'deckofcardslib';

const CardList = ({cards}: {cards: Card[]}) => {
  return (
    <View>
      {cards.map(card => {
        return <CardItem key={card.code} card={card} />;
      })}
    </View>
  );
};

const CardItem = ({card}: {card: Card}) => {
  return (
    <Image
      key={card.code}
      style={{width: 72, height: 100, margin: 5}}
      source={{
        uri: card.image,
      }}
    />
  );
};

export default CardList;
