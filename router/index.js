import React from 'react';
import { StackNavigator } from 'react-navigation';
import DeckList from '../components/DeckList';
import Deck from '../components/Deck';
import Quiz from '../components/Quiz';

export default Router = StackNavigator({
  Home:{
    screen: DeckList
  },
  Deck:{
    screen: Deck
  },
  Quiz:{
    screen: Quiz
  }
});
