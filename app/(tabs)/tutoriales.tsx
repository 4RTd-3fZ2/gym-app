import { View, Text, Pressable, Image } from 'react-native';

import { globalHeaders } from '@/styles/organisms/_headers';
import { globalPages } from '@/styles/templates/_pages';
import { globalSections } from '@/styles/organisms/_sections';
import { globalButtons } from '@/styles/atoms/_buttons';

// Imports de imagenes

export default function Tutoriales() {
    const img_tutorial_1 = require('@/assets/images/img_tutorial_1.png');

    return (
        <View style={globalPages.page}>
            <View style={globalHeaders.header}>
                <Pressable style={globalButtons.a_btn}><Text>Atras</Text></Pressable>
                <Pressable style={globalButtons.a_btn}><Text>Mi Progreso</Text></Pressable>
            </View>
            <View style={globalSections.section}>
                <Image source={img_tutorial_1} resizeMode='contain'></Image>
            </View>
        </View>
    );
}
