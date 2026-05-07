import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/styles/Colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}>Hola Mundo a</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.token_2_base,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
