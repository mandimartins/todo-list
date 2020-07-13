import React, { useState } from 'react';
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

export default function App({ navigation }) {
  const [searchInput, setSearchInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [isListEmpty, setIsListEmpty] = useState(true);

  const handleSearchInput = (value) => {
    setSearchInput(value);
  };

  const handleAddTodo = () => {
    if (!searchInput) return;
    setIsListEmpty(false);
    const id = `${Math.random()}.${searchInput}.${Math.random()}`;
    const newTodos = [{ id, todo: searchInput }, ...todos];
    setTodos(newTodos);
    setSearchInput('');
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevItems) => {
      if (prevItems.length <= 1) setIsListEmpty(true);
      return prevItems.filter((item) => item.id !== id);
    });
  };

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
            onChangeText={handleSearchInput}
            onSubmitEditing={handleAddTodo}
            value={searchInput}
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
