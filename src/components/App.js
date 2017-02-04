import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import AnimatedButton from './AnimatedButton';

class App extends Component {
  state = {buttonVariant: 'primary'}
  
  changeVariant = buttonVariant => {
    this.setState({buttonVariant});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button title="Error" onPress={() => this.changeVariant('error')} />
        <Button title="Primary" onPress={() => this.changeVariant('primary')} />
        <Button title="Success" onPress={() => this.changeVariant('success')} />
        <AnimatedButton variant={this.state.buttonVariant} />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;