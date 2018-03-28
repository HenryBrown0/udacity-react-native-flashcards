import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { fetchDecks } from '../actions';
//Components
import DeckPreview from './DeckPreview';

class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };

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
