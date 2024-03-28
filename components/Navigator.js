import React from "react";
import {useAuth} from "../providers/Auth";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import LoginScreen from "../screens/Login";
import TestNav from "../screens/TestNav";
import DashboardScreen from "../screens/Dashboard";
import ResetPasswordScreen from "../screens/ResetPassword";
import ClientsScreen from "../screens/Clients";
import OnboardClientScreen from "../screens/OnboardClient";
import MyTeamScreen from "../screens/MyTeam";
import ExerciseBuilderScreen from "../screens/ExerciseBuilder";
import TaskBuilderScreen from "../screens/TaskBuilder";
import QuotesPlannerScreen from "../screens/QuotesPlanner";

const Stack = createNativeStackNavigator();

const privateRoutes = [
    { name: "TestNav", component: TestNav },
    { name: "Dashboard", component: DashboardScreen },
    { name: "Clients", component: ClientsScreen },
    { name: "OnboardClient", component: OnboardClientScreen },
    { name: "MyTeam", component: MyTeamScreen },
    { name: "ExerciseBuilder", component: ExerciseBuilderScreen },
    { name: "TaskBuilder", component: TaskBuilderScreen },
    { name: "QuotesPlanner", component: QuotesPlannerScreen },
    { name: "ResetPassword", component: ResetPasswordScreen },
];

function Navigator() {
    const { isLoggedIn } = useAuth();

    if (isLoggedIn) {
        return (
            <Stack.Navigator>
                {
                    privateRoutes.map(({ name, component }) => (
                        <Stack.Screen key={name} name={name} component={component} />
                    ))
                }
            </Stack.Navigator>
        )
    } else {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
            </Stack.Navigator>
        )
    }
}

export default Navigator;