import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  View, Text, Animated,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { deleteTodoAction } from '../../redux/actions';

import Colors from '../../constants/colors';
import { styles } from './styles';

const Card = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const opacityValue = useRef(new Animated.Value(1)).current;

  const dispatch = useDispatch();

  const handleDeleteTodo = ({ todoId, scheduleId }) => {
    dispatch(deleteTodoAction({ todoId, scheduleId }));
  };

  const handleCheckBox = () => {
    setIsSelected(true);

    handleDeleteTodo({ todoId: props.todoId, scheduleId: props.scheduleId });
  };

  const moveCard = () => {
    Animated.timing(opacityValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(handleCheckBox);
  };

  return (
    <Animated.View
      style={{
        ...styles.animated,
        opacity: opacityValue,
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

export default Card;
