import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { fetchDecks } from '../actions';

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    
    return {
      title: params ? params.name : 'Something went wrong',
    }
  };
  
  render() {
    const { id } = this.props.navigation.state.params;
    const { decks } = this.props;
    return (
      <View style={styles.container}>
        {decks.filter(d => d.id == id).map(d => (
          <View key={d.id}>
            <Text>{d.id}</Text>
            <Text>{d.title}</Text>
            <Text>{d.cardCount}</Text>
          </View>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 7,
  },
});

function mapStateToProps ({ decks }) {
  return { decks }
}

export default connect(mapStateToProps)(Deck)
