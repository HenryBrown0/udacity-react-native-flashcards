import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
//Components
import Deck from './components/Deck';

export default class App extends React.Component {
  render() {
    const decks = [

    ];
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Packs:</Text>
        <ScrollView>
          <View style={styles.decks}>
            {
              decks.map(d => (
                <Deck
                  key={d.key}
                  title={d.title}
                  cardCount={d.cardCount}
                />
              ))
          }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  decks: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
