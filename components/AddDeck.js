import React, { Component } from 'react';
import { View, StyleSheet, Text, Keyboard, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { white, blue } from '../utils/colors';
import { addNewDeck } from '../actions';

class AddDeck extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add Deck'
    }
  }

  state = {
    deckTitle: '',
    isTitleValid: false
  }

  onTitleChange = (title) => {
    this.setState({
      deckTitle: title
    });
  }

  submit = () => {
    const { navigation } = this.props;
    this.props.dispatch(addNewDeck(this.state.deckTitle))
    .then(() => {
      navigation.navigate(
        'Deck',
        { deck:  {title:this.state.deckTitle, questions:[]}}
      );
    });
  }

  render() {
    return(
      <KeyboardAvoidingView behavior='padding'>
        <FormLabel>Enter a Title for the New Deck</FormLabel>
        <FormInput
          onChangeText={this.onTitleChange.bind(this)}
          placeholder='Title of the New Deck'
          value={this.state.deckTitle}
        />
        <Button
          title='Create Deck'
          backgroundColor={blue}
          onPress={this.submit}
        />
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(AddDeck);
