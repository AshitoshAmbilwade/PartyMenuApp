'use dom';
import './global.css';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IngredientDetailScreen from './src/screens/IngredientDetailScreen';
import DishList from './src/screens/DishList';
import { NativeWindStyleSheet } from 'nativewind'; // ✅ Standard import

// ✅ Ensure NativeWind works for both native + web


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Party Menu" component={DishList} />
        <Stack.Screen name="IngredientDetail" component={IngredientDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
