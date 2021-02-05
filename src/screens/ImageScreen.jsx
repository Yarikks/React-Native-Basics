/* eslint-disable global-require */
import React from 'react';
import { View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => (
  <View>
    <ImageDetail title="Forest" source={require('../../assets/forest.jpg')} score={9} />
    <ImageDetail title="Beach" source={require('../../assets/beach.jpg')} score={7} />
    <ImageDetail title="Mountain" source={require('../../assets/mountain.jpg')} score={5} />
  </View>
);

export default ImageScreen;
