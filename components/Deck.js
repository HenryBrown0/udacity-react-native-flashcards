import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, AppRegistry } from 'react-native';
//Media
import img from './media/img/100x100.png';

class Deck extends Component {
  openPack = (event) => {
    console.log("Pressed " + this.props.title)
  }
  render() {
    const title = this.props.title ? this.props.title : 'Placeholder';
    const { cardCount } = this.props;
    return (
      <View style={styles.container}>
        <Image 
          source={img}
          style={styles.img}
        />
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.cardCount}>
          Cards: {cardCount}
        </Text>
        <Button
          title='Open pack'
          onPress={this.openPack}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    padding: 4,
    margin: 6,
  },
  img: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 6,
  },
  cardCount: {
    textAlign: 'center',
    paddingBottom: 6,
  },
});

export default Deck;
