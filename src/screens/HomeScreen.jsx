import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigate('Components')}>
        <Text style={styles.buttonText}>Go to Components</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigate('List')}>
        <Text style={styles.buttonText}>Go to List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigate('Image')}>
        <Text style={styles.buttonText}>Go to Image</Text>
      </TouchableOpacity>
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
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

export default HomeScreen;
