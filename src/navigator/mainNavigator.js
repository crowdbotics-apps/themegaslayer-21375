import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4138297Navigator from '../features/BlankScreen4138297/navigator';
import BlankScreen3138295Navigator from '../features/BlankScreen3138295/navigator';
import BlankScreen2138294Navigator from '../features/BlankScreen2138294/navigator';
import BlankScreen6138293Navigator from '../features/BlankScreen6138293/navigator';
import BlankScreen4138291Navigator from '../features/BlankScreen4138291/navigator';
import BlankScreen3138289Navigator from '../features/BlankScreen3138289/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen4138297: { screen: BlankScreen4138297Navigator },
BlankScreen3138295: { screen: BlankScreen3138295Navigator },
BlankScreen2138294: { screen: BlankScreen2138294Navigator },
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
