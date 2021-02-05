import React from 'react';
import {
  View, FlatList, Text, StyleSheet,
} from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #0', age: 20 },
    { name: 'Friend #1', age: 21 },
    { name: 'Friend #2', age: 22 },
    { name: 'Friend #3', age: 23 },
    { name: 'Friend #4', age: 24 },
    { name: 'Friend #5', age: 25 },
    { name: 'Friend #6', age: 26 },
    { name: 'Friend #7', age: 27 },
    { name: 'Friend #8', age: 28 },
    { name: 'Friend #9', age: 29 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(friend) => friend.name}
        showsVerticalScrollIndicator={false}
        data={friends}
        renderItem={({ item }) => (
          <Text style={styles.text}>
            {item.name} - Age {item.age}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    marginVertical: 5,
    textAlign: 'center',
    padding: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e6e7e8',
  },
});

export default ListScreen;
