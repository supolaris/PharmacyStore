import React from 'react';

import MyNativeStack from './src/navigation/NativeStack/NativeStack';

import ContextProvider from './src/context/useContext';

const App = () => {
  return (
    <ContextProvider>
      <MyNativeStack />
    </ContextProvider>
  );
};

export default App;
