import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity, Alert} from 'react-native';
import * as colors from '../colors';

class AnimatedButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorAnimation: new Animated.Value(0),
      textAnimation: new Animated.Value(0),
      oldVariant: props.variant,
      oldText: props.children,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.variant !== nextProps.variant) {
      this.setState({oldVariant: this.props.variant});
    }
    if (this.props.children !== nextProps.children) {
      this.setState({oldText: this.props.children});
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.variant !== this.props.variant) {
      this.animate(this.state.colorAnimation);
    }
    if (prevProps.children !== this.props.children) {
      this.animate(this.state.textAnimation);
    }
  }

  animate = animatedValue => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {toValue: 1, duration: 300}).start();   
  }

  getVariantColor = variant => {
    switch (variant) {
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

  onPress = () => {
    Alert.alert(this.props.children);
  }
  
  render() {
    const buttonBackgroundColor = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [this.getVariantColor(this.state.oldVariant), this.getVariantColor(this.props.variant)],
    });
    const textPosition = this.state.textAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 40],
    });
    const hiddenTextPosition = this.state.textAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [-35, 15],
    });

    return (
      <Animated.View style={[styles.container, {backgroundColor: buttonBackgroundColor}]}>
        <TouchableOpacity onPress={this.onPress} style={styles.pressableArea}>
          <Animated.Text style={[styles.hiddenText, {top: hiddenTextPosition}]}>
            {this.props.children.toUpperCase()}
          </Animated.Text>
          <Animated.Text style={[styles.text, {transform: [{translateY: textPosition}]}]}>
            {this.state.oldText.toUpperCase()}
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

AnimatedButton.defaultProps = {
  variant: 'primary',
};

AnimatedButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'error', 'success']).isRequired,
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    borderRadius: 40,
    overflow: 'hidden',
  },
  pressableArea: {
    padding: 15,
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
  },
  hiddenText: {
    color: '#ffffff',
    fontSize: 24,
    position: 'absolute',
    top: -35,
    left: 0,
    right: 0,
    textAlign: 'center',
  }
});

export default AnimatedButton;