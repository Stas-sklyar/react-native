import {userRoutes} from '../../config'
import {createDrawerNavigator} from '@react-navigation/drawer'
import CustomDrawerContent from '../CustomDrawerContent'

const Drawer = createDrawerNavigator()

function UserNavigator({createDrawerScreens}) {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      backBehavior='history'
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      {createDrawerScreens(userRoutes)}
    </Drawer.Navigator>
  )
}

export default UserNavigator
