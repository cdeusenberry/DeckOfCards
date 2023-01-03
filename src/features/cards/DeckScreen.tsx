import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Card,
  SuitFlag,
  filterCardsBySuits,
  sortCards,
  useDecks,
  useHand,
  useReturnHand,
} from './lib';
import CardDistribution from './components/CardDistribution';
import CardList from './components/CardList';
import Toggles from './components/Toggles';

const DeckScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [deckFetchingEnabled, setDeckFetchingEnabled] = useState(false);
  const [handFetchingEnabled, setHandFetchingEnabled] = useState(false);
  const [hand, setHand] = useState<Card[]>([]);
  const [isSortEnabled, setIsSortEnabled] = useState(false);
  const [filterSuits, setFilterSuits] = useState(SuitFlag.All);

  const {
    data: deck,
    isLoading: deckLoading,
    refetch: fetchNewDeck,
  } = useDecks({enabled: deckFetchingEnabled});
  const {data: cardCollectionData, isLoading: handLoading} = useHand(
    deck?.deck_id || '',
    {enabled: handFetchingEnabled},
  );
  const {mutate: returnHand} = useReturnHand();

  useEffect(() => {
    if (!cardCollectionData) {
      setHand([]);
      return;
    }

    // Only 5 cards, not a big deal
    const cardsCopy = [...cardCollectionData.cards];

    if (isSortEnabled) {
      sortCards(cardsCopy);
    }

    const filteredCards = filterCardsBySuits(cardsCopy, filterSuits);

    setHand(filteredCards);
  }, [cardCollectionData, isSortEnabled, filterSuits]);

  const onGetDeckPressed = () => {
    if (!deckFetchingEnabled) {
      setDeckFetchingEnabled(true);
      return;
    }

    fetchNewDeck();
  };

  const onGetHandPressed = () => {
    if (!deck) {
      return;
    }

    if (!handFetchingEnabled) {
      setHandFetchingEnabled(true);
      return;
    }

    returnHand(deck.deck_id);
  };

  const Content = () => {
    let messageText: string | undefined;
    if (deckLoading || handLoading) {
      messageText = 'Loading Data!';
    } else if (!deck) {
      messageText = 'Get a Deck!';
    } else if (!cardCollectionData) {
      messageText = 'Get a Hand!';
    }

    return (
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Button title="Get Deck" onPress={onGetDeckPressed} />
          <Button
            disabled={!deck}
            title="Get Hand"
            onPress={onGetHandPressed}
          />
        </View>
        {messageText && <Text style={styles.sectionTitle}>{messageText}</Text>}
        <CardDistribution cards={cardCollectionData?.cards} />
        <Toggles
          cards={cardCollectionData?.cards}
          isSortEnabled={isSortEnabled}
          setIsSortEnabled={setIsSortEnabled}
          filterSuits={filterSuits}
          toggleSuit={suit => setFilterSuits(filterSuits ^ suit)}
        />
        <CardList cards={hand} />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={
        isDarkMode ? styles.backgroundStyleDark : styles.backgroundStyleLight
      }>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={
          isDarkMode ? styles.backgroundStyleDark : styles.backgroundStyleLight
        }>
        <Content />
      </ScrollView>
    </SafeAreaView>
  );
};

// These are left over from react-native init
const Colors = {
  primary: '#1292B4',
  white: '#FFF',
  lighter: '#F3F3F3',
  light: '#DAE1E7',
  dark: '#444',
  darker: '#222',
  black: '#000',
};

const styles = StyleSheet.create({
  backgroundStyleDark: {
    backgroundColor: Colors.darker,
  },
  backgroundStyleLight: {
    backgroundColor: Colors.lighter,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default DeckScreen;
