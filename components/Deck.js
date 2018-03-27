import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class Deck extends Component {
  static navigationOptions = {
    title: 'Deck',
  };
  
  render() {
    const decks = [
      {
        key: 1,
        title: 1,
        cardCount: 1,
      },{
        key: 2,
        title: 2,
        cardCount: 2,
      }
    ]
    const { params } = this.props.navigation.state;
    console.log(params)
    return (
      <View style={styles.container}>
        <Text>{params.id}</Text>
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

export default Deck;
