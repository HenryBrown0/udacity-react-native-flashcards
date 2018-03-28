import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { fetchDecks } from '../actions';
//Media
import img from './media/img/100x100.png';

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    
    return {
      title: params ? params.name : 'Something went wrong',
    }
  };
  
  render() {
    const { id } = this.props.navigation.state.params;
    const { decks, navigation } = this.props;
    decks.filter(d => d.id == id).map(d => {
      cardCount = d.cardCount;
    })
    return (
      <View style={styles.container}>

        <View style={styles.detailContainer}>
          <Image 
            source={img}
          />
          <Text style={styles.detailTitle}
            >Number of cards in deck: {cardCount}
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              title='Start a Quiz'
              disabled={cardCount == 0 ? true : false}
              onPress={() => console.log('Start quiz')}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title='Create New Question'
              color="#841584"
              onPress={() => console.log('New question')}
            />
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 7,  
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  detailTitle: {
    margin: 10,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  btn: {
    flex: 1,
    margin: 5,
  }
});

function mapStateToProps ({ decks }) {
  return { decks }
}

export default connect(mapStateToProps)(Deck)
