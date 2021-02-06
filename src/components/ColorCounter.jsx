import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import CustomButton from './CustomButton';

const ColorCounter = ({ color, onIncrease, onDecrease }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Set a {color} color</Text>
    <CustomButton text="Increase" onPress={onIncrease} />
    <CustomButton text="Decrease" onPress={onDecrease} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

ColorCounter.propTypes = {
  color: PropTypes.string.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default ColorCounter;
