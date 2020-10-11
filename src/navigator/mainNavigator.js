import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2138290Navigator from '../features/BlankScreen2138290/navigator';
import BlankScreen3138289Navigator from '../features/BlankScreen3138289/navigator';
import BlankScreen0138286Navigator from '../features/BlankScreen0138286/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2138290: { screen: BlankScreen2138290Navigator },
BlankScreen3138289: { screen: BlankScreen3138289Navigator },
BlankScreen0138286: { screen: BlankScreen0138286Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
