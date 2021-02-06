import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 12,
    width: '50%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CustomButton;
