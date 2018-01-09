import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { green, red, white, purple, orange } from '../utils/colors';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    }
  }

  state = {
    currentIndex: 0,
    right: 0,
    showAnswer: false
  }

  toggleAnswer = () => {
    this.setState((prevState) => (
      {showAnswer:!prevState.showAnswer}
    ));
  }

  rightAnswer = () => {
    let { currentIndex, right } = this.state;
    currentIndex += 1;
    right += 1;

    this.setState({
      currentIndex,
      right,
      showAnswer: false
    });
  }

  incorrectAnswer = () => {
    let { currentIndex } = this.state;
    currentIndex += 1;
    this.setState({
      currentIndex,
      showAnswer: false
    });
  }

  resetQuiz = () => {
    this.setState({
      currentIndex:0,
      right:0,
      showAnswer: false
    });
  }


  render() {
    const navigation = this.props.navigation;
    const questions = navigation.state.params.questions;
    const { currentIndex, showAnswer } = this.state;

    return (
      <View style={styles.container}>
        {
          currentIndex === questions.length ?
          <View>
            <Text>You had {this.state.right} of {questions.length} correct answers</Text>
            <Button
              title='Take again?'
              onPress={this.resetQuiz}
            />
            <Button
              title='Go decks'
              onPress={() => {
                const resetAction = NavigationActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Home' })
                  ]
                })
                navigation.dispatch(resetAction)
              }}
            />
          </View> :

          <View>
            <Text>{currentIndex + 1} / {questions.length} </Text>
            <Text>
              {
                showAnswer ?
                  questions[currentIndex].answer :
                  questions[currentIndex].question
              }
            </Text>
            <Button
              title={showAnswer ? 'Hide Answer' : 'Show Answer'}
              backgroundColor={orange}
              onPress={this.toggleAnswer}
            />
            <Button
              title='Correct'
              backgroundColor={green}
              onPress={this.rightAnswer}
            />
            <Button
              title='Incorrect'
              backgroundColor={red}
              onPress={this.incorrectAnswer}
            />
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center'
  }
})


export default connect()(Quiz);
