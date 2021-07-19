import React, { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  KeyboardAvoidingView, View, Image, Text,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { fetchTodosAction, addTodoAction } from '../../redux/actions';
import background from '../../../assets/background/Tasks.png';

import List from '../../components/List';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  createListsTable, createTodosTable,
  insertDefaultValueIntoList,
} from '../../database';

import Colors from '../../constants/colors';
import { styles } from './styles';

export default function App({ navigation }) {
  const [textInput, setTextInput] = useState('');
  const [isListEmpty, setIsListEmpty] = useState(true);
  const defaultTable = useState(1)[0];

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const memoFetchTodos = useCallback(() => {
    dispatch(fetchTodosAction());
  }, [dispatch]);

  const handleTextInput = (value) => {
    setTextInput(value);
  };

  const handleAddTodo = () => {
    if (!textInput) return;
    dispatch(addTodoAction({ textInput, defaultTable }));
    setTextInput('');
    setIsListEmpty(false);
  };

  useEffect(() => {
    if (todos.length === 0) {
      setIsListEmpty(true);
    } else {
      setIsListEmpty(false);
    }
  }, [todos]);

  useEffect(() => {
    createListsTable().catch((error) => console.log(error));
    createTodosTable().catch((error) => console.log(error));
    insertDefaultValueIntoList('Default').catch((error) => console.log(error));
    memoFetchTodos();
  }, [memoFetchTodos]);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.translucent} />
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
          <List todoList={todos} />
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
