# MobileFlashCards
This is the third project to Udacity Nanodegree of React, covering the React Native phase, the app work on iOS an Android platforms

# About
This a mobile application (Android or iOS) that allows users to study collections of flashcards. The app  allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.
This project is bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

# Installation
```
git clone https://github.com/fredydeltoro/MobileFlashCards.git
cd MobileFlashcards
yarn install
yarn start
```

# Technologies
React Native Elements - Used to improve the UI of the application.
React Navigation - Navigation for React Native.
Redux - State management is handled with Redux.
Redux Thunk - A Redux middleware, is used to dispatch call to AsyncStorage.
Expo - Expo is a free and open source toolchain built around React Native to help build native iOS and Android projects using JavaScript and React.

# Archicture
```
|____MobileFlashcards
  |____.babelrc
  |____.DS_Store
  |____.expo
  | |____packager-info.json
  | |____settings.json
  |____.flowconfig
  |____.gitignore
  |____.watchmanconfig
  |____actions
  | |____index.js
  |____App.js
  |____app.json
  |____App.test.js
  |____components
  | |____AddCard.js
  | |____AddDeck.js
  | |____Deck.js
  | |____DeckList.js
  | |____Quiz.js
  | |____TopDeck.js
  |____package.json
  |____README.md
  |____reducers
  | |____index.js
  |____router
  | |____index.js
  |____utils
  | |_____decks.js
  | |____api.js
  | |____colors.js
  | |____notifications.js
  |____yarn.lock
```
