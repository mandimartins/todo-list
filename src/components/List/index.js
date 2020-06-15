import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Card from '../Card';

const List = () => {
  return (
    <ScrollView style={styles.container}>
      <Card title="One task" />
      <Card title="One task" />
      <Card title="One task" />
      <Card title="One task" />
      <Card title="One task" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default List;
