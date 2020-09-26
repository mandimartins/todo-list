import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Image,
  Text,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import background from '../../../assets/background/Tasks.png';

import Colors from '../../constants/colors';
import List from '../../components/List';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  createListsTable,
  createTodosTable,
  selectAllTodos,
  insertDefaultValueIntoList,
  insertNewTask,
  deleteTodo,
} from '../../database';

export default function App({ route, navigation }) {
  const [textInput, setTextInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [isListEmpty, setIsListEmpty] = useState(true);
  const [defaultTable, setDefaultTable] = useState(1);

  const handleTextInput = (value) => {
    setTextInput(value);
  };

  const handleAddTodo = () => {
    if (!textInput) return;
    insertNewTask(textInput, defaultTable).then(({ insertId }) => {
      setTodos((prevItens) => [
        ...prevItens,
        { id: insertId, name: textInput },
      ]);
      setTextInput('');
      setIsListEmpty(false);
    });
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevItems) => {
      if (prevItems.length <= 1) setIsListEmpty(true);
      deleteTodo(id).catch((error) => console.log(error));
      return prevItems.filter((item) => item.id !== id);
    });
  };

  //update when custom item is added

  useEffect(() => {
    const updateList = () => {
      if (!route.params) return;
      const { id } = route.params;
      const { name } = route.params;
      setTodos((prevItems) => [...prevItems, { id, name }]);
      setIsListEmpty(false);
    };
    updateList();
  }, [route.params]);

  useEffect(() => {
    createListsTable().catch((error) => console.log(error));
    createTodosTable().catch((error) => console.log(error));
    insertDefaultValueIntoList('Defaul').catch((error) => console.log(error));

    selectAllTodos()
      .then(({ rows: { _array } }) => {
        if (_array.length !== 0) {
          setTodos([..._array]);
          setIsListEmpty(false);
        } else {
          setTodos([..._array]);
          setIsListEmpty(true);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.translucent} style="light" />
      <View style={styles.container}>
        {isListEmpty ? (
          <View>
            <Image
              style={{
                width: 150,
                height: 105,
                alignSelf: 'center',
                marginTop: 70,
                opacity: 0.8,
              }}
              source={background}
            />
            <Text
              style={{
                color: Colors.fontDark,
                textAlign: 'center',
                marginTop: 5,
              }}
            >
              Adicione tarefas
            </Text>
          </View>
        ) : (
          <List todoList={todos} deleteTodo={handleDeleteTodo} />
        )}
        <View style={styles.input}>
          <View style={styles.buttonContainer}>
            <Button
              style={{ backgroundColor: Colors.info }}
              onPress={() => navigation.navigate('Options')}
            >
              <FontAwesome name="gear" size={30} color={Colors.secondary} />
            </Button>
            <Button
              style={{ backgroundColor: Colors.info }}
              onPress={() => navigation.navigate('Details')}
            >
              <FontAwesome name="plus" size={30} color={Colors.secondary} />
            </Button>
          </View>
          <Input
            placeholder="Enter a task"
            onChangeText={handleTextInput}
            onSubmitEditing={handleAddTodo}
            value={textInput}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
  },
  input: {
    height: 110,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
