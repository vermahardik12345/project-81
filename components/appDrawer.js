import { StyleSheet, Text, View,TouchableOpacity ,TextInput,Image} from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import Menu  from './barMenu';
import {createDrawerNavigator} from 'react-navigation-drawer'
import TabNavigator from './TabNavigator';
import settings from '../screens/settings';
export const SideDrawer=createDrawerNavigator({

   Home:{
       screen:TabNavigator
   },
   Settings:{
       screen:settings
   }
},
{
    contentComponent:Menu
},
{
    initialRouteName:'Home'
}


)

