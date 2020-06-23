import React from 'react';
import { View, Text, TextInput, Picker, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../../../components/Button';

import Colors from '../../../constants/colors';

const Form = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formControl}>
        <TextInput style={styles.input} placeholder="Adicionar tarefa" />
        <FontAwesome name="pencil" size={24} color="black" />
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
        <Picker style={{ height: 50, width: 120 }}>
          <Picker.Item label="Padrão" value="Padrão" />
          <Picker.Item label="Compras" value="Compras" />
        </Picker>
      </View>
      <Button style={styles.button}>
        <Text style={styles.buttonTitle}>Salvar</Text>
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
