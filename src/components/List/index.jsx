import React from 'react';
import { FlatList } from 'react-native';
import Card from '../Card';

import { styles } from './styles';

const List = (props) => (
  <FlatList
    data={props.todoList}
    renderItem={({ item }) => (
      <Card todoId={item.id} scheduleId={item.scheduleId} title={item.name} />
    )}
    keyExtractor={(item) => String(item.id)}
    style={styles.container}
  />
);

export default List;
