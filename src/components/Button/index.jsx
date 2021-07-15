import React from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';

const Button = (props) => (
  <TouchableOpacity {...props} style={{ ...styles.container, ...props.style }}>
    {props.children}
  </TouchableOpacity>
);

export default Button;
