import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../Card';

const List = (props) => {
  return (
    <FlatList
      data={props.todoList}
      renderItem={({ item }) => (
        <Card deleteTodo={props.deleteTodo} id={item.id} title={item.todo} />
      )}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default List;
