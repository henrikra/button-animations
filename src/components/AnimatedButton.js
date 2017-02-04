import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import * as colors from '../colors';

class AnimatedButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animatedValue: new Animated.Value(0),
      oldColor: this.getVariantColor(props.variant),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.variant !== nextProps.variant) {
      this.setState({oldColor: this.getVariantColor(this.props.variant)});
    }
  }
  

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.variant !== this.props.variant) {
      this.state.animatedValue.setValue(0);
      Animated.timing(this.state.animatedValue, {toValue: 1}).start();
    }
  }

  getVariantColor = () => {
    switch (this.props.variant) {
      case 'primary':
        return colors.primary;
      case 'success':
        return colors.success;
      case 'error':
        return colors.error;
      default:
        return colors.primary;
    }
  }
  
  render() {
    const buttonBackgroundColor = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.oldColor, this.getVariantColor(this.props.variant)],
    });

    return (
      <Animated.View style={[styles.container, {backgroundColor: buttonBackgroundColor}]}>
        <Text style={styles.text}>SUBMIT</Text>
      </Animated.View>
    );
  }
}

AnimatedButton.defaultProps = {
  variant: 'primary',
};

AnimatedButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'error', 'success']).isRequired,
};

const styles = StyleSheet.create({
  container: {
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