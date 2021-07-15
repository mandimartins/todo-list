import React from 'react';
import * as Notifications from 'expo-notifications';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';

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
