import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Components
import Dashboard from './components/Dashboard';
import Deck from './components/Deck';

class App extends Component {
  render() {
    const Stack = StackNavigator({
      Dashboard: {
        screen: Dashboard
      },
      Deck: {
        screen: Deck
      },
    })
    return (
      <Stack />
    );
  }
}

export default App;
