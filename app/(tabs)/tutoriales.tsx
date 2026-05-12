// import { useState } from 'react';
// import { View, Text, Pressable, Image, ScrollView } from 'react-native';

// // Imports de imagenes
// export default function Tutoriales() {
//     const img_tutorial_1 = require('@/assets/images/img_tutorial_1.png');
//     const [bgColor, setBgColor] = useState('');

//     const handleScroll = (event: any) => {
//         const y = event.nativeEvent.contentOffset.y;

//         // 2. Lógica para cambiar el color según el scroll
//         if (y > 1) {
//             setBgColor('#000'); // Rojo si baja de 100px
//         } else {
//             setBgColor(''); // Gris original
//         }
//     };

//     const ItemEjercicios = () => {
//         return (
//             <View className='col-span-1 flex flex-col h-36 m-2 rounded-lg overflow-hidden'>
//                 <Image source={img_tutorial_1} resizeMode="cover" style={{ width: '100%', height: '120%' }} ></Image>
//             </View>
//         );
//     }

//     return (
//         <View className="bg-[#0f172a] flex-1">
//             <View className='mt-0 relative'>
//                 <View className="overflow-hidden rounded-lg">
//                     <Image source={img_tutorial_1} resizeMode='contain'></Image>
//                 </View>
//             </View>

//             <View className='flex flex-row w-full h-full absolute bg-gradient-to-b from-[#0f172a]/10 to-[#0f172a]  backdrop-blur-sm'>

//                 <ScrollView className='w-full h-full'
//                     onScroll={handleScroll}
//                     scrollEventThrottle={16} // Importante para fluidez
//                 >
//                     <View className='flex-row h-10 justify-between z-20 px-5 my-2 top-0 sticky' style={{ backgroundColor: bgColor }}>
//                         <Pressable className='bg-[#6f7278] w-[100px] my-auto p-1.5 rounded-xl justify-center items-center'>
//                             <Text className='text-white'>Atrás</Text>
//                         </Pressable>
//                         <Pressable className='bg-[#f97316]/60 w-[100px] my-auto p-1.5 rounded-xl items-center'>
//                             <Text className='text-white'>Mi Progreso</Text>
//                         </Pressable>
//                     </View>
//                     <View className='h-[100%] mx-5'>
//                         <View className='w-full h-full rounded-2xl overflow-hidden'>
//                             <Image source={img_tutorial_1} resizeMode="cover" style={{ width: '100%', height: '120%' }} ></Image>
//                         </View>
//                     </View>
//                     <View className='my-5 mx-5'>
//                         <Text className='text-white font-bold text-xl'>FLEXIÓN ANTEBRAZOS</Text>
//                         <Text className='text-white opacity-70'>El ejercicio de flexión de antebrazos se refiere principalmente a dos tipos de movimientos que buscan fortalecer la musculatura del brazo inferior o mejorar la fuerza de agarre. Dependiendo del enfoque, puede tratarse de un ejercicio de aislamiento o una variante de calistenia.</Text>
//                     </View>
//                     <View className='mx-5'>
//                         <Text className='text-white font-bold text-xl'>Otros Ejercicios</Text>
//                         <View className='w-full'>
//                             <View className='w-full  grid grid-cols-3 gap-2'>
//                                 <ItemEjercicios />
//                                 <ItemEjercicios />
//                                 <ItemEjercicios />
//                             </View>
//                             <View className='w-full  grid grid-cols-3 gap-2'>
//                                 <ItemEjercicios />
//                                 <ItemEjercicios />
//                                 <ItemEjercicios />
//                             </View>
//                         </View>
//                     </View>
//                 </ScrollView>
//             </View>
//         </View >
//     );
// }


import { useState } from 'react';
import { View, Text, Pressable, Image, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const CARD_SIZE = (width - 40 - 16) / 3; // 3 columnas con margen

export default function Tutoriales() {
    const img_tutorial_1 = require('@/assets/images/img_tutorial_1.png');
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = (event: any) => {
        const y = event.nativeEvent.contentOffset.y;
        setScrolled(y > 1);
    };

    const ItemEjercicios = () => (
        <View
            style={{ width: CARD_SIZE, height: CARD_SIZE * 1.1 }}
            className="rounded-xl overflow-hidden"
        >
            <Image
                source={img_tutorial_1}
                resizeMode="cover"
                style={{ width: '100%', height: '100%' }}
            />
        </View>
    );

    return (
        <View className="bg-[#0f172a] flex-1">

            {/* Imagen de fondo fija detrás del scroll */}
            <Image
                source={img_tutorial_1}
                resizeMode="cover"
                style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 420 }}
            />

            {/* Gradiente de fondo sobre la imagen */}
            <LinearGradient
                colors={['transparent', '#0f172a']}
                style={{ position: 'absolute', top: 260, left: 0, right: 0, height: 160 }}
            />

            {/* Scroll encima de todo */}
            <ScrollView
                className="flex-1"
                onScroll={handleScroll}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
            >
                {/* Header botones */}
                <View
                    className="flex-row justify-between px-5 py-3 my-5"
                    style={{
                        backgroundColor: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
                        position: 'sticky', top: 0,
                    }}
                >
                    <Pressable className="bg-[#6f7278] px-5 py-2 rounded-xl">
                        <Text className="text-white font-medium">Atrás</Text>
                    </Pressable>
                    <Pressable className="bg-[#f97316] px-5 py-2 rounded-xl">
                        <Text className="text-white font-medium">Mi Progreso</Text>
                    </Pressable>
                </View>

                {/* Espaciador para que el contenido empiece bajo la imagen hero */}
                <View style={{ height: 360 }} />

                {/* Contenido principal sobre fondo sólido */}
                <View className="bg-[#0f172a] rounded-t-3xl px-5 pt-6 pb-10">

                    {/* Título y descripción */}
                    <Text className="text-white font-bold text-2xl mb-2">
                        FLEXIÓN ANTEBRAZOS
                    </Text>
                    <Text className="text-slate-400 text-sm leading-relaxed mb-6">
                        El ejercicio de flexión de antebrazos se refiere principalmente a dos tipos
                        de movimientos que buscan fortalecer la musculatura del brazo inferior o
                        mejorar la fuerza de agarre. Dependiendo del enfoque, puede tratarse de un
                        ejercicio de aislamiento o una variante de calistenia.
                    </Text>

                    {/* Otros ejercicios */}
                    <Text className="text-white font-bold text-xl mb-4">Otros Ejercicios</Text>

                    {/* Fila 1 */}
                    <View className="flex-row justify-between mb-3">
                        <ItemEjercicios />
                        <ItemEjercicios />
                        <ItemEjercicios />
                    </View>

                    {/* Fila 2 */}
                    <View className="flex-row justify-between">
                        <ItemEjercicios />
                        <ItemEjercicios />
                        <ItemEjercicios />
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}