import { StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: Colors.fontDark,
    width: '90%',
  },
  animated: {
    backgroundColor: Colors.secondary,
    padding: 15,
    width: '100%',
    elevation: 2,
    borderRadius: 5,
    marginVertical: 6,
  },
});
