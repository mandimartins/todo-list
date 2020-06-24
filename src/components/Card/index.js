import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Colors from '../../constants/colors';

const Card = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const leftValue = useState(new Animated.Value(0))[0];

  const handleCheckBox = () => {
    props.setCheckBox(setIsSelected);
    props.deleteTodo(props.id);
  };

  const moveCard = () => {
    Animated.timing(leftValue, {
      toValue: 1000,
      duration: 500,
      useNativeDriver: true,
    }).start(handleCheckBox);
  };

  return (
    <Animated.View
      style={{
        ...styles.animated,
        transform: [
          {
            translateX: leftValue,
          },
        ],
      }}
    >
      <View style={styles.container}>
        <CheckBox
          value={isSelected}
          onValueChange={moveCard}
          tintColors={{ true: `${Colors.info}`, false: `${Colors.tertiary}` }}
        />
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: Colors.fontDark,
    width: '90%',
  },
  animated: {
    backgroundColor: Colors.secondary,
    padding: 15,
    width: '100%',
    elevation: 2,
    borderRadius: 5,
    marginVertical: 6,
  },
});
export default Card;
