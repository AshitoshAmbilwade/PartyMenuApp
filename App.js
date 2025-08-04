'use dom';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import IngredientDetailScreen from './src/screens/IngredientDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IngredientDetail" component={IngredientDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
