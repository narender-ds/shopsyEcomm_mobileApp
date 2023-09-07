import React from 'react';
import {NativeBaseProvider} from 'native-base';
import AppNavigator from './src/screens/AppNavigator';

const App = () => {
  return (
    <NativeBaseProvider>
      <AppNavigator />
    </NativeBaseProvider>
  );
};

export default App;
