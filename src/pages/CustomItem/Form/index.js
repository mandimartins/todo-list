import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../../../components/Button";

import Colors from "../../../constants/colors";

import DateTimePicker from "../../../components/DateTImePicker";

import { selectAllLists, insertNewTask } from "../../../database";

import { format, Interval } from "date-fns";

import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  //show notification even inside the app
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

const Form = ({ navigation }) => {
  const d = new Date();
  const [date, setDate] = useState(
    new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      d.getHours(),
      d.getMinutes(),
      0,
      0
    )
  );

  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [task, setTask] = useState("");
  const [lists, setLists] = useState([]);
  const [selectedListItem, setSelectedListItem] = useState({
    index: 0,
  });

  useEffect(() => {
    selectAllLists()
      .then(({ rows: { _array } }) => {
        const arrayOfLists = _array;
        setLists(arrayOfLists);
      })
      .catch((error) => console.log(error));
  }, []);

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
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const handleTaskInput = (value) => {
    setTask(value);
  };

  const handleCustomTaskAdition = () => {
    if (!task) return;
    const listItem = lists[selectedListItem.index];

    const notificationId = Notifications.scheduleNotificationAsync({
      content: {
        title: "It's time to do your task!",
        body: task,
      },
      trigger: date,
    });

    notificationId.then((notificationId) => {
      insertNewTask(task, listItem.id)
        .then(({ insertId }) => {
          navigation.navigate("Home", {
            id: insertId,
            name: task,
            cancelScheduleId: notificationId,
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <DateTimePicker
        show={show}
        date={date}
        mode={mode}
        onChange={onChangeTime}
      />
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
            value={format(date, "dd/MM/yyyy")}
          />
          <FontAwesome
            name="calendar"
            size={35}
            color="black"
            onPress={showDatepicker}
          />
        </View>
        <View style={styles.formControl}>
          <TextInput
            style={styles.dateTimeInput}
            placeholder="Hora não definida"
            editable={false}
            value={format(date, "hh:mm")}
          />
          <FontAwesome
            name="clock-o"
            size={35}
            color="black"
            onPress={showTimepicker}
          />
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
        <Button style={styles.button} onPress={handleCustomTaskAdition}>
          <Text style={styles.buttonTitle}>Salvar</Text>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formControl: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.secondary,
    padding: 12,
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    width: "95%",
  },
  dateTimeInput: {
    fontSize: 18,
    width: "70%",
  },
  bold: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    width: "100%",
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
