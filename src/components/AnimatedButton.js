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
      this.animateFromStart(this.state.colorAnimation);
    }
    if (this.props.children !== nextProps.children) {
      this.setState({oldText: this.props.children});
      this.animateFromStart(this.state.textAnimation);
    }
  }
  
  animateFromStart = animatedValue => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {toValue: 1, duration: 250}).start();   
  }

  onPress = () => {
    Alert.alert(this.props.children);
  }
  
  render() {
    const backgroundColor = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [colors[this.state.oldVariant], colors[this.props.variant]],
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
      <Animated.View style={[styles.container, {backgroundColor}]}>
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