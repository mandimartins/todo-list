import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Todo List</Text>
  </View>
);

export default Header;
