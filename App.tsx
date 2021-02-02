import 'react-native-gesture-handler';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import Router from './src/navigation';
import store from './src/store';

const App: React.FC = () => (
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
);

export default App;
