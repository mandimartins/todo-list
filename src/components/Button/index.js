import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

const Button = (props) => {
  return (
    <TouchableOpacity
      {...props}
      style={{ ...styles.container, ...props.style }}
    >
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tertiary,
    elevation: 5,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default Button;
