import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { FontAwesome } from '@expo/vector-icons';
import { format } from 'date-fns';
import Button from '../../../components/Button';
import DateTimePicker from '../../../components/DateTImePicker';

import { addCustomTodoAction, fetchListsAction } from '../../../redux/actions';

import { styles } from './styles';

const Form = ({ navigation }) => {
  const dispatch = useDispatch();

  const memoFetchList = useCallback(() => {
    dispatch(fetchListsAction());
  }, [dispatch]);

  const d = new Date();
  const [date, setDate] = useState(
    new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), 0, 0),
  );

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [task, setTask] = useState('');
  const lists = useState([])[0];
  const [selectedListItem, setSelectedListItem] = useState({
    index: 0,
  });

  useEffect(() => {
    memoFetchList();
  }, [memoFetchList]);

  const onChangeTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleTaskInput = (value) => {
    setTask(value);
  };

  const handleCustomTaskAdition = () => {
    if (!task) return;
    const listItem = lists[selectedListItem.index];
    dispatch(addCustomTodoAction({ textInput: task, defaultTable: listItem.id, date }));
    navigation.navigate('Home');
  };

  return (
    <>
      <DateTimePicker show={show} date={date} mode={mode} onChange={onChangeTime} />
      <View style={styles.container}>
        <View style={styles.formControl}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar tarefa"
            onChangeText={handleTaskInput}
            value={task}
          />
        </View>
        <View style={styles.formControl} onPress={showDatepicker}>
          <TextInput
            style={styles.dateTimeInput}
            placeholder="Prazo"
            editable={false}
            value={format(date, 'dd/MM/yyyy')}
          />
          <FontAwesome name="calendar" size={35} color="black" onPress={showDatepicker} />
        </View>
        <View style={styles.formControl}>
          <TextInput
            style={styles.dateTimeInput}
            placeholder="Hora não definida"
            editable={false}
            value={format(date, 'hh:mm')}
          />
          <FontAwesome name="clock-o" size={35} color="black" onPress={showTimepicker} />
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
                <Picker.Item key={listItem.id} label={listItem.name} value={listItem.name} />
              ))
            ) : (
              <Picker.Item label="..." value="..." />
            )}
          </Picker>
        </View>
        <Button style={styles.button} onPress={handleCustomTaskAdition}>
          <Text style={styles.buttonTitle}>Salvar</Text>
        </Button>
      </View>
    </>
  );
};

export default Form;
