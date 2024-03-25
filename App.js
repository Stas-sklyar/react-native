import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from './screens/Dashboard';
import LoginScreen from './screens/Login';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import ResetPasswordScreen from "./screens/ResetPassword";
import ClientsScreen from "./screens/Clients";
import TestNav from "./screens/TestNav";
import OnboardClientScreen from "./screens/OnboardClient";
import MyTeamScreen from "./screens/MyTeam";
import ExerciseBuilderScreen from "./screens/ExerciseBuilder";
import TaskBuilderScreen from "./screens/TaskBuilder";
import QuotesPlannerScreen from "./screens/QuotesPlanner";

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="TestNav">
              <Stack.Screen name="TestNav" component={TestNav} />
              <Stack.Screen name="Dashboard" component={DashboardScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
              <Stack.Screen name="Clients" component={ClientsScreen} />
              <Stack.Screen name="OnboardClient" component={OnboardClientScreen} />
              <Stack.Screen name="MyTeam" component={MyTeamScreen} />
              <Stack.Screen name="ExerciseBuilder" component={ExerciseBuilderScreen} />
              <Stack.Screen name="TaskBuilder" component={TaskBuilderScreen} />
              <Stack.Screen name="QuotesPlanner" component={QuotesPlannerScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;