import React, { Component } from 'react';
import { View, StyleSheet, Text, Keyboard, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { blue } from '../utils/colors';
import { addQuestionToDeck } from '../actions';

class AddCard extends Component{

  state = {
    question: '',
    answer: '',
  }

  onQuestionChange = (question) => {
    this.setState({
      question
    });
  }

  onAnswerChange = (answer) => {
    this.setState({
      answer
    });
  }

  submit = () => {
    const { navigation } = this.props;
    const { question, answer } = this.state;
    const title = navigation.state.params.deck.title;
    Keyboard.dismiss();
    this.props.dispatch(addQuestionToDeck(title, {question, answer}))
      .then(() => {
        navigation.goBack();
      })
  }

  render() {
    return (
      <KeyboardAvoidingView>
        <FormLabel>Question for the Flashcard</FormLabel>
        <FormInput
          placeholder='Enter the Question Here'
          onChangeText={this.onQuestionChange.bind(this)}
          value={this.state.question}
        />
        <FormLabel>Answer to the Question</FormLabel>
        <FormInput
          placeholder='Enter the Answer Here'
          onChangeText={this.onAnswerChange.bind(this)}
            value={this.state.answer}
        />
        <Button
          title='Add Card'
          backgroundColor={blue}
          onPress={this.submit}
        />
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(AddCard);
