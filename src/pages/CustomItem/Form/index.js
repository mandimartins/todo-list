import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../../../components/Button';

import Colors from '../../../constants/colors';

import { selectAllLists, insertNewTask } from '../../../database';

const Form = ({ navigation }) => {
  const [lists, setLists] = useState([]);
  const [selectedListItem, setSelectedListItem] = useState({
    index: 0,
  });

  const [task, setTask] = useState('');

  const handleTaskInput = (value) => {
    setTask(value);
  };

  const handleCustomTaskAdition = () => {
    const listItem = lists[selectedListItem.index];
    insertNewTask(task, listItem.id)
      .then(({ insertId }) => {
        navigation.navigate('Home', {
          id: insertId,
          name: task,
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    selectAllLists()
      .then(({ rows: { _array } }) => {
        const arrayOfLists = _array;
        setLists(arrayOfLists);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.formControl}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar tarefa"
          onChangeText={handleTaskInput}
          value={task}
        />
      </View>
      <View style={styles.formControl}>
        <TextInput style={styles.input} placeholder="Prazo" />
        <FontAwesome name="calendar" size={24} color="black" />
      </View>
      <View style={styles.formControl}>
        <TextInput style={styles.input} placeholder="Hora não definida" />
        <FontAwesome name="clock-o" size={24} color="black" />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.bold}>Criar nova lista</Text>
        <FontAwesome name="list" size={24} color="black" />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.bold}>Adicionar à lista</Text>
        <Picker
          style={{ height: 50, width: 120 }}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedListItem({ index: itemIndex });
          }}
        >
          {lists.length !== 0 ? (
            lists.map((listItem) => (
              <Picker.Item
                key={listItem.id}
                label={listItem.name}
                value={listItem.name}
              />
            ))
          ) : (
            <Picker.Item label="..." value="..." />
          )}
        </Picker>
      </View>
      <Button style={styles.button}>
        <Text style={styles.buttonTitle} onPress={handleCustomTaskAdition}>
          Salvar
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  formControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    padding: 12,
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    width: '95%',
  },
  bold: {
    fontSize: 16,
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
export default Form;
