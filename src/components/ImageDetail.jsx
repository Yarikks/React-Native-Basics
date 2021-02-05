import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

const ImageDetail = ({ title, source, score }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={source} />
    <Text style={styles.text}>{title}</Text>
    <Text style={styles.text}>Image score is {score}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
  },
});

ImageDetail.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default ImageDetail;
