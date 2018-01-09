import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
import { getDecks } from '../utils/api';
import _ from 'lodash';
import TopDeck from './TopDeck';

class DeckList extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Decks'
    }
  }

  state = {
    isReady: false,
  }

  componentDidMount() {
    getDecks()
      .then((decks) =>{
        this.props.dispatch(receiveDecks(decks))
        this.setState({
          isReady:true
        });
      })
  }

  render() {
    const { decks, navigation } = this.props;
    const { isReady } = this.state;

    if (!isReady) {
      return <AppLoading />
    }

    return (
      <View style={styles.deck}>
        <FlatList
          data={this.props.decks}
          renderItem={({ item }) => (
            <TopDeck deck={item} navigation={navigation}/>
          )}
          >
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    marginTop: 10
  }
})

function mapStateToProps(state) {
  const decks = [];
  Object.keys(state).forEach((key) => {
    decks.push(state[key])
  })
  return{
    decks
  }
}


export default connect(mapStateToProps)(DeckList);
