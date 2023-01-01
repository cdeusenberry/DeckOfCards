import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

const Colors = {
    primary: '#1292B4',
    white: '#FFF',
    lighter: '#F3F3F3',
    light: '#DAE1E7',
    dark: '#444',
    darker: '#222',
    black: '#000',
};

const DeckScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={isDarkMode ? styles.backgroundStyleDark : styles.backgroundStyleLight}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={isDarkMode ? styles.backgroundStyleDark : styles.backgroundStyleLight}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Text>Hand Screen</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

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