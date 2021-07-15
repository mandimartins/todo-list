import { StyleSheet } from 'react-native';

import Colors from '../../../constants/colors';

export const styles = StyleSheet.create({
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
  dateTimeInput: {
    fontSize: 18,
    width: '70%',
  },
  bold: {
    fontSize: 18,
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
