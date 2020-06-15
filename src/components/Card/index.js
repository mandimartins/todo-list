import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Box from '../Box';

import Colors from '../../constants/colors';

const Card = (props) => {
  return (
    <Box>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Feather name="trash-2" size={20} color={Colors.tertiary} />
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: Colors.fontDark,
  },
});
export default Card;
