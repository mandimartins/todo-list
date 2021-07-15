import { StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
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
