import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

const Box = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    padding: 15,
    width: '100%',
    elevation: 2,
    borderRadius: 5,
    marginVertical: 6,
  },
});

export default Box;
