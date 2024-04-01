import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {useAuth} from "../providers/Auth";

const visibleInMenuLinks = [
    { name: "Dashboard" },
    { name: "Clients" },
    { name: "Onboard Client" },
    { name: "My Team" },
    { name: "Exercise Builder" },
    { name: "Task Builder" },
    { name: "Quotes Planner" },
    { name: "Reset Password" },
];

function CustomDrawerContentView(props) {
    const { logout } = useAuth();

    return (
        <DrawerContentScrollView {...props}>
            {
                visibleInMenuLinks.map(item => (
                    <DrawerItem
                        key={item.name}
                        onPress={() => props.navigation.navigate(item.name)}
                        label={item.name}
                    />
                ))
            }

            <DrawerItem
                onPress={() => logout()}
                label='Logout'
            />
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContentView;