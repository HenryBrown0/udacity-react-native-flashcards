import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
//Media
import img from './media/img/100x100.png';

class DeckPreview extends Component {
  render() {
    const title = this.props.title ? this.props.title : 'Placeholder';
    const { id, cardCount } = this.props;
    return (
      <View elevation={2} style={styles.container}>
        <View style={styles.imgContainer}>
          <Image 
            source={img}
            style={styles.img}
          />
        </View>
        <View style={styles.detailContainer}>
          <Text>{title}</Text>
          <Text>Cards: {cardCount}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title='Go to deck'
            onPress={
              () => this.props.navigation.navigate(
                'Deck', {id: id, name: title }
              )}
          />
        </View>
      </View>
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
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    
  }
});

export default DeckPreview;
