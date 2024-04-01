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
import ClientDetailsScreen from "../screens/ClientDetails";
import ColleagueDetailsScreen from "../screens/ColleagueDetails";
import EditColleagueScreen from "../screens/EditColleague";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

const privateRoutes = [
    { name: "Dashboard", component: DashboardScreen},
    { name: "Clients", component: ClientsScreen},
    { name: "Onboard Client", component: OnboardClientScreen},
    { name: "My Team", component: MyTeamScreen},
    { name: "Exercise Builder", component: ExerciseBuilderScreen},
    { name: "Task Builder", component: TaskBuilderScreen},
    { name: "Quotes Planner", component: QuotesPlannerScreen},
    { name: "Reset Password", component: ResetPasswordScreen},
    { name: "Client Details", component: ClientDetailsScreen},
    { name: "Colleagues Details", component: ColleagueDetailsScreen},
    { name: "Edit Colleague", component: EditColleagueScreen},
];

function Navigator() {
    const { isLoggedIn } = useAuth();

    if (isLoggedIn) {
        return (
            <Drawer.Navigator
                initialRouteName='Dashboard'
                drawerContent={props => <CustomDrawerContent {...props} />}
            >
                {
                    privateRoutes.map(({ name, component, drawerLabel }) => (
                        <Drawer.Screen
                            key={name}
                            name={name}
                            component={component}
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
                <Drawer.Screen name="Reset Password" component={ResetPasswordScreen} />
            </Drawer.Navigator>
        )
    }
}

export default Navigator;