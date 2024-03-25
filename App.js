import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider} from "./providers/Auth";
import Navigator from "./components/Navigator";

function App() {
  return (
      <AuthProvider>
          <NavigationContainer>
              <Navigator />
          </NavigationContainer>
      </AuthProvider>
  );
}

export default App;