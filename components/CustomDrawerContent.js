import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import {useAuth} from '../providers/Auth'
import {visibleInMenuLinksForAdmin, visibleInMenuLinksForUser} from '../config'
function CustomDrawerContentView(props) {
  const {logout, role} = useAuth()

  const getVisibleLinks = () => {
    return role === 'user'
      ? visibleInMenuLinksForUser
      : visibleInMenuLinksForAdmin
  }

  const handleLogout = () => {
    props.navigation.closeDrawer()
    logout()
  }

  return (
    <DrawerContentScrollView {...props}>
      {getVisibleLinks().map(item => (
        <DrawerItem
          key={item.name}
          onPress={() => props.navigation.navigate(item.name)}
          label={item.name}
        />
      ))}

      <DrawerItem onPress={handleLogout} label="Logout" />
    </DrawerContentScrollView>
  )
}

export default CustomDrawerContentView
