import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';

const TextScreen = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <Text style={styles.text}>Type something</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Type something..."
        onChangeText={(value) => setText(value)}
      />
      {text.length > 5
        ? <Text style={styles.text}>Your value is: {text}</Text>
        : <Text style={styles.text}>Value must be longer than 5 symbols</Text> }
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 22,
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderBottomWidth: 1,
    fontSize: 16,
  },
});

export default TextScreen;
