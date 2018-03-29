import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { fetchDecks } from '../actions';
//Icons
import Icon from 'react-native-vector-icons/Entypo';
//Components
import DeckPreview from './DeckPreview';

class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  state = {
    active: true,
  }

  componentDidMount(){
		this.props.fetchDecks();
  };
  
  render() {
    const { decks } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          { decks ? (
            <View style={styles.decks}>
              { decks.sort((a, b) => b.cardCount - a.cardCount).map(d => (
                <DeckPreview
                  key={d.id}
                  id={d.id}
                  title={d.title}
                  cardCount={d.cardCount}
                  navigation={this.props.navigation}
                />
              )) }
              <Text style={styles.end}>That's all folks</Text>
            </View>
          ) : (<Text style={styles.title}>No packs</Text>) }
        </ScrollView>

        <View elevation={2} style={styles.btnContainer}>
          <Icon
            name="plus"
            size={35}
            color="white"
            
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('NewDeck')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 7,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  decks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  end: {
    padding: 25
  },
  btnContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 15,
  },
  btn: {
    backgroundColor: 'blueviolet',
    borderRadius: 100,
    padding: 5,
  },
});

function mapStateToProps ({ decks }) {
  return { decks }
}

function mapDispatchToProps (dispatch) {
  return {
		fetchDecks: (data) => dispatch(fetchDecks(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
