import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
//Components
import DeckPreview from './DeckPreview';

class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    const decks = [
      {
        id: 1,
        title: 1,
        cardCount: 1,
      },{
        id: 2,
        title: 2,
        cardCount: 2,
      }
    ]
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Packs:</Text>
        <ScrollView>
          <View style={styles.decks}>
            {
              decks.map(d => (
                <DeckPreview
                  key={d.id}
                  id={d.id}
                  title={d.title}
                  cardCount={d.cardCount}
                  navigation={this.props.navigation}
                />
              ))
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 7,
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

export default Dashboard;
