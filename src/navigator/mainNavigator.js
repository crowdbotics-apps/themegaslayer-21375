import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4138450Navigator from '../features/BlankScreen4138450/navigator';
import BlankScreen3138449Navigator from '../features/BlankScreen3138449/navigator';
import BlankScreen2138448Navigator from '../features/BlankScreen2138448/navigator';
import BlankScreen7138300Navigator from '../features/BlankScreen7138300/navigator';
import BlankScreen6138299Navigator from '../features/BlankScreen6138299/navigator';
import BlankScreen5138298Navigator from '../features/BlankScreen5138298/navigator';
import BlankScreen4138297Navigator from '../features/BlankScreen4138297/navigator';
import BlankScreen3138295Navigator from '../features/BlankScreen3138295/navigator';
import BlankScreen6138293Navigator from '../features/BlankScreen6138293/navigator';
import BlankScreen4138291Navigator from '../features/BlankScreen4138291/navigator';
import BlankScreen3138289Navigator from '../features/BlankScreen3138289/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen4138450: { screen: BlankScreen4138450Navigator },
BlankScreen3138449: { screen: BlankScreen3138449Navigator },
BlankScreen2138448: { screen: BlankScreen2138448Navigator },
BlankScreen7138300: { screen: BlankScreen7138300Navigator },
BlankScreen6138299: { screen: BlankScreen6138299Navigator },
BlankScreen5138298: { screen: BlankScreen5138298Navigator },
BlankScreen4138297: { screen: BlankScreen4138297Navigator },
BlankScreen3138295: { screen: BlankScreen3138295Navigator },
BlankScreen6138293: { screen: BlankScreen6138293Navigator },
BlankScreen4138291: { screen: BlankScreen4138291Navigator },
BlankScreen3138289: { screen: BlankScreen3138289Navigator },

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
