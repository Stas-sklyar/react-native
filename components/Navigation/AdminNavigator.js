import {adminRoutes} from '../../config'
import {createDrawerNavigator} from '@react-navigation/drawer'
import CustomDrawerContent from '../CustomDrawerContent'

const Drawer = createDrawerNavigator()

function AdminNavigator({createDrawerScreens}) {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      backBehavior='history'
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      {createDrawerScreens(adminRoutes)}
    </Drawer.Navigator>
  )
}

export default AdminNavigator
