import { Tabs } from 'expo-router';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,

                tabBarActiveTintColor: '#f97316',
                tabBarInactiveTintColor: '#9ca3af',

                tabBarStyle: {
                    backgroundColor: '#111827',

                    borderTopWidth: 0,

                    height: 60,

                    paddingBottom: 5,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',

                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="tutoriales"
                options={{
                    title: 'Tutoriales',

                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="file-document-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="metricas"
                options={{
                    title: 'Métricas',

                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="chart-bar"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
