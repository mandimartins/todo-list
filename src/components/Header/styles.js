import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    height: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    color: Colors.secondary,
    fontWeight: 'bold',
  },
});
