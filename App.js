import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
//Redux
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
//Components
import Dashboard from './components/Dashboard';
import Deck from './components/Deck';
import NewQuestion from './components/NewQuestion';

class App extends Component {
  render() {
    const Stack = StackNavigator({
      Dashboard: {
        screen: Dashboard
      },
      Deck: {
        screen: Deck
      },
      NewQuestion: {
        screen: NewQuestion
      }
    })

    return (
      <Provider store={createStore(reducer)}>
        <Stack />
      </Provider>
    );
  }
}

export default App;
