import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {useAuth} from "../providers/Auth";
import {visibleInMenuLinksForAdmin, visibleInMenuLinksForUser} from "../config";

function CustomDrawerContentView(props) {
    const { logout, role } = useAuth();

    return (
        <DrawerContentScrollView {...props}>
            {
                (role === 'user' ? visibleInMenuLinksForUser : visibleInMenuLinksForAdmin)
                    .map(item => (
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