import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

import Button from '../../components/Button';
import List from '../../components/List';

import { selectAllLists } from '../../database';

const CreateList = () => {
  const [lists, setLists] = useState([]);
  const [isListEmpty, setIsListEmpty] = useState(true);

  useEffect(() => {
    selectAllLists().then(({ rows: { _array } }) => {
      if (_array.length !== 0) {
        setLists([..._array]);
        setIsListEmpty(false);
      } else {
        setLists([..._array]);
        setIsListEmpty(true);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Criando listas</Text>
        <Text style={styles.subtitle}>
          Após criar uma nova lista adicione tarefas a ela na opção " Tarefas
          customizadas" na tela inicial do app.
        </Text>
      </View>
      <View style={styles.formControl}>
        <TextInput style={styles.input} placeholder="Nome da lista" />
      </View>
      <Button style={styles.button}>
        <Text style={styles.buttonTitle}>Salvar</Text>
      </Button>
      <Text style={styles.subtitle}>Suas Listas</Text>
      <List items={lists} style={{ padding: 0, marginTop: 20 }} />
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
    flex: 1,
    marginHorizontal: 20,
  },
  formControl: {
    flexDirection: 'row',
    backgroundColor: Colors.secondary,
    padding: 12,
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    width: '100%',
  },
  bold: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: Colors.action,
  },
  buttonTitle: {
    color: Colors.secondary,
  },
});

export default CreateList;
