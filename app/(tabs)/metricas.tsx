import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Genera la grilla de asistencias: 7 filas (días) x 11 columnas (semanas)
const generateGrid = () => {
    const dias = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
    const grid = dias.map((dia, rowIdx) => ({
        dia,
        celdas: Array.from({ length: 9 }, (_, colIdx) => {
            // Algunas celdas apagadas (gris) para imitar la imagen
            const apagadas = [
                [2, 3], [2, 9],       // fila D
                [1, 2], [1, 8],       // fila L
                [2, 5], [2, 10],      // fila M
                [3, 4], [3, 7],       // fila M2
                [4, 1], [4, 6],       // fila J
                [5, 2], [5, 8],       // fila V
                [6, 3], [6, 9],       // fila S
            ];
            const off = apagadas.some(([r, c]) => r === rowIdx && c === colIdx);
            return { activa: !off };
        }),
    }));
    return grid;
};

const grid = generateGrid();

const CELL_SIZE = Math.floor((width - 80) / 11); // responsive

export default function Metricas() {
    const img_profile = require('@/assets/images/img_profile.jpg');

    const handleScroll = (event: any) => {
        const y = event.nativeEvent.contentOffset.y;
    };

    return (
        <View className="bg-[#0f172a] flex-1">
            <ScrollView
                className="w-full h-full"
                onScroll={handleScroll}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
            >
                {/* ── HEADER ── */}
                <View className="flex-row items-center justify-between px-5 pt-12 pb-4">
                    {/* Avatar + fecha */}
                    <View className="flex-row items-center gap-3 my-2">
                        <View
                            className="rounded-full overflow-hidden border-2 border-orange-500"
                            style={{ width: 48, height: 48 }}
                        >
                            <Image
                                source={img_profile}
                                resizeMode="cover"
                                style={{ width: 48, height: 48 }}
                            />
                        </View>
                        <View className="ml-3">
                            <Text className="text-white text-lg font-bold leading-tight">
                                Hoy,{' '}
                                <Text className="text-orange-500">18 Nov</Text>
                            </Text>
                        </View>
                    </View>

                    {/* Icono settings */}
                    <TouchableOpacity className="p-2">
                        <Ionicons name="settings-outline" size={22} color="#94a3b8" />
                    </TouchableOpacity>
                </View>

                {/* ── SECCIÓN ESTADO ── */}
                <View className="px-5 mb-2">
                    <Text className="text-white text-xl font-bold mb-3">Estado</Text>

                    {/* Card principal */}
                    <View className="bg-[#1e293b] rounded-2xl p-4">

                        {/* Fila: ícono + título */}
                        <View className="flex-row items-center mb-4">
                            <View className="bg-[#0f172a] rounded-xl p-2 mr-3">
                                <Ionicons name="barbell-outline" size={22} color="#f97316" />
                            </View>
                            <View>
                                <Text className="text-white font-semibold text-base">Entrenamiento</Text>
                                <Text className="text-slate-400 text-xs">Resultado de asistencias</Text>
                            </View>
                        </View>

                        {/* Stats: 3 pastillas */}
                        <View className="flex-row gap-2 mb-5">
                            <StatBadge value="12 días" label="Cumplidos" />
                            <StatBadge value="37%" label="Concentración" />
                            <StatBadge value="120" label="Calorías" />
                        </View>

                        {/* Grilla de asistencias */}
                        <View>
                            {grid.map((fila, rowIdx) => (
                                <View key={rowIdx} className="flex-row items-center mb-1">
                                    {/* Etiqueta del día */}
                                    <Text
                                        className="text-slate-400 text-xs font-semibold"
                                        style={{ width: 16 }}
                                    >
                                        {fila.dia}
                                    </Text>
                                    {/* Celdas */}
                                    <View className="flex-row flex-1 gap-1 ml-1">
                                        {fila.celdas.map((celda, colIdx) => (
                                            <View
                                                key={colIdx}
                                                style={{
                                                    width: CELL_SIZE,
                                                    height: CELL_SIZE,
                                                    borderRadius: 5,
                                                    backgroundColor: celda.activa ? '#f97316' : '#334155',
                                                }}
                                            />
                                        ))}
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                {/* ── SECCIÓN HISTORIAL ── */}
                <View className="px-5 mt-4 mb-10">
                    <Text className="text-white text-xl font-bold mb-3">Historial</Text>
                    <View className="bg-[#1e293b] rounded-2xl" style={{ height: 120 }}>
                        {/* Aquí irá el contenido del historial */}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

/* ── Componente reutilizable: badge de estadística ── */
function StatBadge({ value, label }: { value: string; label: string }) {
    return (
        <View className="flex-1 bg-[#0f172a] rounded-xl py-2 px-3 items-center">
            <Text className="text-white font-bold text-base">{value}</Text>
            <Text className="text-slate-400 text-xs text-center">{label}</Text>
        </View>
    );
}