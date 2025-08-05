import './global.css';
import { LogBox } from 'react-native'; // 👈 Import LogBox first
import { registerRootComponent } from 'expo';
import App from './App';

// ✅ Suppress pointerEvents deprecation warning
LogBox.ignoreLogs([
  'props.pointerEvents is deprecated',
]);

// ✅ Register the root component
registerRootComponent(App);
