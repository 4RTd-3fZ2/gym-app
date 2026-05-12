import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '../styles/global.css';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <StatusBar style="light" backgroundColor="#000000" />
            <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaProvider>
    );
}
