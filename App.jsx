import React from 'react';
import { Provider } from 'react-native';
import * as Notifications from 'expo-notifications';
import store from './src/redux/store';

import AppNavigator from './src/routes/routes';

Notifications.setNotificationHandler({
  // show notification inside the app
  handleNotification: async () => ({
    shouldShowAlert: true,
  }),
});

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
