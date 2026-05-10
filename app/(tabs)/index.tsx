import { View, Text } from 'react-native';

export default function Home() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0f172a',
            }}
        >
            <Text style={{ color: 'white', fontSize: 24 }}>
                Home
            </Text>
        </View>
    );
}
