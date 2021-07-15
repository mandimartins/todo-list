import React from 'react';
import { View, TextInput } from 'react-native';

import Colors from '../../constants/colors';
import { styles } from './styles';

const Input = (props) => (
  <View style={styles.container}>
    <TextInput
      {...props}
      style={styles.input}
      placeholderTextColor={Colors.secondary}
    />
  </View>
);
export default Input;
