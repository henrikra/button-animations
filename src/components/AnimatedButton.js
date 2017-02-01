import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AnimatedButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SUBMIT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3869B6',
    paddingVertical: 15,
    paddingHorizontal: 55,
    borderRadius: 40,
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
  }
});

export default AnimatedButton;