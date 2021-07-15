import React from 'react';
import { View, Text } from 'react-native';
import Form from './Form';

import { styles } from './styles';

const CustomItem = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>Tarefa customizada</Text>
      <Text style={styles.subtitle}>
        Adicione tarefas a uma lista existente ou crie uma nova lista agora
      </Text>
    </View>
    <Form navigation={navigation} />
  </View>
);

export default CustomItem;
