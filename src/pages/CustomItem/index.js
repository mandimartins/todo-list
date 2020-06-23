import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Form from './Form';
import Colors from '../../constants/colors';

const CustomItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Tarefa customizada</Text>
        <Text style={styles.subtitle}>
          Adicione tarefas a uma lista existente ou crie uma nova lista agora
        </Text>
      </View>
      <Form />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    color: Colors.fontDark,
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 50,
  },
  container: {
    marginHorizontal: 20,
  },
});

export default CustomItem;
