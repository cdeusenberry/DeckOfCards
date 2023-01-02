import React from 'react';
import { Switch, Text, View } from 'react-native';

import { Card, SuitsEnum } from '../lib';

const Toggles = ({ cards, isSortEnabled, setIsSortEnabled, filterSuits, toggleSuit }: {
    cards: Card[],
    isSortEnabled: boolean,
    setIsSortEnabled: (val: boolean) => void,
    filterSuits: SuitsEnum,
    toggleSuit: (val: SuitsEnum) => void,
}) => {
    if (cards.length < 1) {
        return null;
    }

    return (<View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View>
            <Text>Sort</Text>
            <Switch
                trackColor={{ true: '#00ff00' }}
                onValueChange={() => setIsSortEnabled(!isSortEnabled)}
                value={isSortEnabled} />
        </View>
        <View>
            <Text>Hearts</Text>
            <Switch
                trackColor={{ true: '#00ff00' }}
                onValueChange={() => toggleSuit(SuitsEnum.hearts)}
                value={(filterSuits & SuitsEnum.hearts) > 0} />
        </View>
        <View>
            <Text>Clubs</Text>
            <Switch
                trackColor={{ true: '#00ff00' }}
                onValueChange={() => toggleSuit(SuitsEnum.clubs)}
                value={(filterSuits & SuitsEnum.clubs) > 0} />
        </View>
        <View>
            <Text>Diamonds</Text>
            <Switch
                trackColor={{ true: '#00ff00' }}
                onValueChange={() => toggleSuit(SuitsEnum.diamonds)}
                value={(filterSuits & SuitsEnum.diamonds) > 0} />
        </View>
        <View>
            <Text>Spades</Text>
            <Switch
                trackColor={{ true: '#00ff00' }}
                onValueChange={() => toggleSuit(SuitsEnum.spades)}
                value={(filterSuits & SuitsEnum.spades) > 0} />
        </View>
    </View>)
}

export default Toggles;