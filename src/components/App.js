import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import AnimatedButton from './AnimatedButton';

class App extends Component {
  state = {
    buttonVariant: 'primary',
    text: 'Submit',
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Change button state</Text>
        <View style={styles.texts}>
          <Button title="Submit" onPress={() => this.setState({text: 'Submit', buttonVariant: 'primary'})} />
          <Button title="Whoops" onPress={() => this.setState({text: 'Whoops', buttonVariant: 'error'})} />
          <Button title="Retry" onPress={() => this.setState({text: 'Retry', buttonVariant: 'error'})} />
          <Button title="Thanks" onPress={() => this.setState({text: 'Thanks', buttonVariant: 'success'})} />
        </View>
        <AnimatedButton variant={this.state.buttonVariant}>
          {this.state.text}
        </AnimatedButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  texts: {
    flexDirection: 'row',
    marginBottom: 25,
  },
});

export default App;