import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tertiary,
    height: 90,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    color: Colors.secondary,
    fontWeight: 'bold',
  },
});

export default Header;
