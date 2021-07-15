import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput,
} from 'react-native';

import Button from '../../components/Button';
import List from '../../components/List';

import { selectAllLists } from '../../database';

import { styles } from './styles';

const CreateList = () => {
  const [lists, setLists] = useState([]);
  const setIsListEmpty = useState(true)[1];

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
  }, [setIsListEmpty]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Criando listas</Text>
        <Text style={styles.subtitle}>
          Após criar uma nova lista adicione tarefas a ela na opção (Tarefas
          customizadas) na tela inicial do app.
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

export default CreateList;
