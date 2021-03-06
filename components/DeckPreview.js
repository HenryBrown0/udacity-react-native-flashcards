import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image
} from 'react-native';
//Redux
import { connect } from 'react-redux';
import { deleteDeck } from '../actions';
//Media
import img from './media/img/100x100.png';
//Icons
import Icon from 'react-native-vector-icons/Feather';

class DeckPreview extends Component {
  render() {
    const title = this.props.title ? this.props.title : 'Unamed deck';
    const { id, cardCount } = this.props;
    return (
      <View elevation={2} style={styles.container}>
        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate(
            'Deck', { id, title }
          )}
        >
          <View style={styles.deckContainer}>
            <View style={styles.imgContainer}>
              <Image source={img} style={styles.img} />
            </View>
            <View style={styles.detailContainer}>
              <Text>{title}</Text>
              <Text>Cards: {cardCount}</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
        <View style={styles.btnContainer}>
          <TouchableNativeFeedback onPress={() => this.props.deleteDeck(id)} >
            <Icon name="x-circle" size={30} color="firebrick" />
          </TouchableNativeFeedback>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#fff',
    padding: 4,
    margin: 6,
  },
  deckContainer: {
    flex: 10,
    flexDirection: 'row',
  },
  imgContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 50,
    width: 50,
  },
  detailContainer: {
    flex: 7,
    margin: 5,
  },
  btnContainer: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps ({ decks }) {
  return { decks }
}


function mapDispatchToProps (dispatch) {
  return {
		deleteDeck: (data) => dispatch(deleteDeck(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckPreview)
