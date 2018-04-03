import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
//Redux
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
//Components
import { setLocalNotification } from './utils/helpers';
//Views
import Dashboard from './components/Dashboard';
import Deck from './components/Deck';
import NewQuestion from './components/NewQuestion';
import NewDeck from './components/NewDeck';
import Quiz from './components/Quiz';

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
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
      },
      NewDeck: {
        screen: NewDeck
      },
      Quiz: {
        screen: Quiz
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
