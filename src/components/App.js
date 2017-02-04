import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import AnimatedButton from './AnimatedButton';

class App extends Component {
  state = {
    buttonVariant: 'primary',
    text: 'Submit',
  }
  
  changeVariant = buttonVariant => {
    this.setState({buttonVariant});
  }

  changeText = text => {
    this.setState({text});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Variants</Text>
        <View style={styles.variants}>
          <Button title="Error" onPress={() => this.changeVariant('error')} />
          <Button title="Primary" onPress={() => this.changeVariant('primary')} />
          <Button title="Success" onPress={() => this.changeVariant('success')} />
        </View>
        <Text style={styles.header}>Variants</Text>
        <View style={styles.texts}>
          <Button title="Submit" onPress={() => this.changeText('Submit')} />
          <Button title="Whoops" onPress={() => this.changeText('Whoops')} />
          <Button title="Retry" onPress={() => this.changeText('Retry')} />
          <Button title="Thanks" onPress={() => this.changeText('Thanks')} />
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
  variants: {
    flexDirection: 'row',
  },
  texts: {
    flexDirection: 'row',
    marginBottom: 25,
  },
});

export default App;