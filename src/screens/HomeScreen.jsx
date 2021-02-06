import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ navigation }) => {
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <CustomButton text="Go to Components" onPress={() => navigate('Components')} />
      <CustomButton text="Go to List" onPress={() => navigate('List')} />
      <CustomButton text="Go to Image" onPress={() => navigate('Image')} />
      <CustomButton text="Go to Color" onPress={() => navigate('Color')} />
      <CustomButton text="Go to Text" onPress={() => navigate('Text')} />
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
});

export default HomeScreen;
