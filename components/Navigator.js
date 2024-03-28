import React from "react";
import {useAuth} from "../providers/Auth";
import LoginScreen from "../screens/Login";
import DashboardScreen from "../screens/Dashboard";
import ResetPasswordScreen from "../screens/ResetPassword";
import ClientsScreen from "../screens/Clients";
import OnboardClientScreen from "../screens/OnboardClient";
import MyTeamScreen from "../screens/MyTeam";
import ExerciseBuilderScreen from "../screens/ExerciseBuilder";
import TaskBuilderScreen from "../screens/TaskBuilder";
import QuotesPlannerScreen from "../screens/QuotesPlanner";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const privateRoutes = [
    { name: "Dashboard", component: DashboardScreen, drawerLabel: 'Dashboard' },
    { name: "Clients", component: ClientsScreen, drawerLabel: 'Clients' },
    { name: "OnboardClient", component: OnboardClientScreen, drawerLabel: 'Onboard Client' },
    { name: "MyTeam", component: MyTeamScreen, drawerLabel: 'My Team' },
    { name: "ExerciseBuilder", component: ExerciseBuilderScreen, drawerLabel: 'Exercise Builder' },
    { name: "TaskBuilder", component: TaskBuilderScreen, drawerLabel: 'TaskBuilder' },
    { name: "QuotesPlanner", component: QuotesPlannerScreen, drawerLabel: 'Quotes Planner' },
    { name: "ResetPassword", component: ResetPasswordScreen, drawerLabel: 'Reset Password' },
];

function Navigator() {
    const { isLoggedIn } = useAuth();

    if (isLoggedIn) {
        return (
            <Drawer.Navigator initialRouteName='Dashboard'>
                {
                    privateRoutes.map(({ name, component, drawerLabel }) => (
                        <Drawer.Screen
                            key={name}
                            name={name}
                            component={component}
                            options={{drawerLabel}}
                            lazy
                        />
                    ))
                }
            </Drawer.Navigator>
        )
    } else {
        return (
            <Drawer.Navigator initialRouteName='Login'>
                <Drawer.Screen name="Login" component={LoginScreen} />
                <Drawer.Screen name="ResetPassword" component={ResetPasswordScreen} />
            </Drawer.Navigator>
        )
    }
}

export default Navigator;