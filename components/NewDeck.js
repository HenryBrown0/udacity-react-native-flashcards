import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { addDeck } from '../actions';
//Media
import img from './media/img/100x100.png';

class NewDeck extends Component {
  static navigationOptions = {
    title: 'New Deck',
  };
  state = {
    id: '',
    name: '',
  }

  onSubmit = () => {
    const { addDeck, navigation } = this.props;
    const { id, name } = this.state;
    if(id && name){
      addDeck(id, name);
      navigation.goBack()
    }
  }
  
  render() {
    const { decks, navigation } = this.props;
    const { id, name } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.detailInput}
            placeholder="ID"
            value={id}
            onChangeText={(id) => this.setState({id})}
          />
          <TextInput
            style={styles.detailInput}
            placeholder="Name"
            value={name}
            onChangeText={(name) => this.setState({name})}
          />
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              title='Cancel'
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title='Submit'
              color="#841584"
              onPress={() => this.onSubmit()}
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
  detailInput: {
    height: 40,
    margin: 10,
  },
  detailContent: {
    margin: 10,
  },
  btnContainer: {
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

function mapDispatchToProps (dispatch) {
  return {
		addDeck: (data) => dispatch(addDeck(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeck)
