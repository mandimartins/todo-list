import { StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    color: Colors.fontDark,
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 50,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  formControl: {
    flexDirection: 'row',
    backgroundColor: Colors.secondary,
    padding: 12,
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    width: '100%',
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
