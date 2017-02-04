import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import AnimatedButton from './AnimatedButton';

class App extends Component {
  state = {
    buttonVariant: 'primary',
    buttonText: 'Submit',
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Change button state</Text>
        <View style={styles.texts}>
          <Button title="Submit" onPress={() => this.setState({buttonText: 'Submit', buttonVariant: 'primary'})} />
          <Button title="Whoops" onPress={() => this.setState({buttonText: 'Whoops', buttonVariant: 'error'})} />
          <Button title="Retry" onPress={() => this.setState({buttonText: 'Retry', buttonVariant: 'error'})} />
          <Button title="Thanks" onPress={() => this.setState({buttonText: 'Thanks', buttonVariant: 'success'})} />
        </View>
        <AnimatedButton variant={this.state.buttonVariant}>
          {this.state.buttonText}
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
    backgroundColor: '#E3F2FD',
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