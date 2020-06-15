import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Colors from './src/constants/colors';
import Header from './src/components/Header';
import List from './src/components/List';
import Button from './src/components/Button';
import Input from './src/components/Input';

export default function App() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.status} style="light" />
      <Header />
      <View style={styles.container}>
        <List />
        <View style={styles.input}>
          <Button />
          <Input />
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
    height: 120,
    justifyContent: 'space-between',
  },
});
