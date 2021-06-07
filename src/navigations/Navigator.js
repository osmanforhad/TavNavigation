import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Setting from './src/screens/Setting';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    return (

          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Setting" component={Setting} />
          </Tab.Navigator>

      );
}

export default AppNavigator;