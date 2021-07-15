import { StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tertiary,
    elevation: 5,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
