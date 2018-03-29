import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { fetchDecks } from '../actions';
//Native base
import { Icon, Fab } from 'native-base';
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
          <View style={styles.decks}>
            {
              decks ? (
                decks.map(d => (
                  <DeckPreview
                    key={d.id}
                    id={d.id}
                    title={d.title}
                    cardCount={d.cardCount}
                    navigation={this.props.navigation}
                  />
                ))
              ) : (<Text style={styles.title}>No packs</Text>)
            }
          </View>
        </ScrollView>

        <View style={styles.btn}>
          <Fab
            style={{ backgroundColor: '#841584' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('NewDeck')}>
            <Icon name="add" />
          </Fab>
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
  btn: {
    flex: 1,
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
