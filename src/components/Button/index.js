import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Colors from '../../constants/colors';

const Button = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Feather name="plus" size={32} color={Colors.primary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tertiary,
    elevation: 5,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: 20,
  },
});

export default Button;
