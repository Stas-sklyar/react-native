import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider} from "./providers/Auth";
import Navigator from "./components/Navigation/Navigator";
import {QueryClient, QueryClientProvider} from "react-query";
import 'react-native-gesture-handler';

const queryClient = new QueryClient();
function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <AuthProvider>
              <NavigationContainer>
                  <Navigator />
              </NavigationContainer>
          </AuthProvider>
      </QueryClientProvider>
  );
}

export default App;