import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

class AnimatedButton extends Component {
  state = {animatedValue: new Animated.Value(0)}

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.variant !== this.props.variant) {
      Animated.timing(this.state.animatedValue, {toValue: 1}).start();
    }
  }
  
  render() {
    const background = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(56, 105, 182)', 'rgb(211, 47, 47)'],
    });

    return (
      <Animated.View style={[styles.container, {backgroundColor: background}]}>
        <Text style={styles.text}>SUBMIT</Text>
      </Animated.View>
    );
  }
}

AnimatedButton.defaultProps = {
  variant: 'primary',
};

AnimatedButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'error']).isRequired,
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