import { StatusBar } from 'expo-status-bar';
import HomeScreen from './components/HomeScreen';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#00000000' barStyle='light-content' />
      <HomeScreen />
    </>
  );
}
