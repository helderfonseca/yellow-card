import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import Login from './pages/Login';
import Home from './pages/Home';

export default function App() {
  const user = true;
  return (
    <SafeAreaView style={{flex: 1}}>
      {user ? <Home /> : <Login />}
    </SafeAreaView>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
