import React, { useState } from 'react';
import Splash from './src/Screen/Splash';
import StackNavigation from './src/navigation/stacknavigation';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';


const App = () => {
  const [showSplash, setShowSplash] = useState(false)
  LogBox.ignoreAllLogs()
  setTimeout(() => {
    setShowSplash(true)
  }, 1000);
  return (
    <>
      {
        showSplash == false ? <Splash /> : <StackNavigation />
      }

    </>
  );
}

export default App;
