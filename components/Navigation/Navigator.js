import React from 'react'
import {useAuth} from '../../providers/Auth'
import {createDrawerNavigator} from '@react-navigation/drawer'
import UserNavigator from './UserNaigator'
import AdminNavigator from './AdminNavigator'
import LoginScreen from '../../screens/Login'
import ResetPasswordScreen from '../../screens/ResetPassword'

function createDrawerScreens(routes) {
  return routes.map(({name, component}) => (
    <Drawer.Screen key={name} name={name} component={component} lazy />
  ))
}

const Drawer = createDrawerNavigator()

function Navigator() {
  const {isLoggedIn, role} = useAuth()

  if (!isLoggedIn) {
    return (
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Reset Password" component={ResetPasswordScreen} />
      </Drawer.Navigator>
    )
  }

  return role === 'admin' ? (
    <AdminNavigator createDrawerScreens={createDrawerScreens} />
  ) : (
    <UserNavigator createDrawerScreens={createDrawerScreens} />
  )
}

export default Navigator
