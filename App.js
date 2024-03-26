import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider} from "./providers/Auth";
import Navigator from "./components/Navigator";
import {QueryClient, QueryClientProvider} from "react-query";

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