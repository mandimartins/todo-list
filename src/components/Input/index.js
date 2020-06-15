import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import Colors from '../../constants/colors';

const Input = () => {
  const [Input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        placeholderTextColor={Colors.secondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tertiary,
    padding: 10,
  },
  input: {
    color: Colors.secondary,
    fontSize: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
  },
});
export default Input;
