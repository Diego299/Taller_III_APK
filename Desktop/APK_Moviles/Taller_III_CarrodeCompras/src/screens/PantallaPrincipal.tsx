import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import { BodyComponent } from '../Componentes/Cuerpo';
import { TitleComponent } from '../Componentes/Titulo';
import { styles } from '../theme/Styles';

interface Motorcycle {
    id: number;
    name: string;
    price: string;
    image: string;
}

const motorcycles: Motorcycle[] = [
    {
        id: 1,
        name: 'Ducati Panigale V4',
        price: '$28,500',
        image: 'https://adrenalinaducati.com/wp-content/uploads/2017/11/panigale-v4-ducati-600x600.png'
    },
    {
        id: 2,
        name: 'Yamaha YZF-R1',
        price: '$17,400',
        image: 'https://www.yamahamotos.cl/wp-content/uploads/2022/07/r1_negra.jpg'
    },
    {
        id: 3,
        name: 'BMW S1000RR',
        price: '$19,000',
        image: 'https://inchcapelatam.sirv.com/Motorrad/Im%C3%A1genes/S%201000%20RR/versionesA.png'
    },
    {
        id: 4,
        name: 'Kawasaki Ninja H2',
        price: '$29,000',
        image: 'https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2018/02/Kawasaki-Ninja-H2-Carbon-2018-05-768x538.jpg'
    }
];

export const PantallaInicio = () => {
    return (
        <View style={{ flex: 1 }}>
            <TitleComponent title="Tienda de Motos" />
            <BodyComponent>
            <FlatList
            data={motorcycles}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <View style={styles.productCard}>
            <Image
            source={{ uri: item.image }}
            style={styles.productImage}
            resizeMode="cover"/>
            <View style={styles.productInfo}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            </View>
        </View>)}
        ListHeaderComponent={
            <View>
            <Text style={styles.titleHeaderBody}>Motos de Alto Cilindraje</Text>
            <Text style={styles.textBody}>Explora nuestra selección de motos de alto rendimiento</Text>
                        </View>
                    }
                    contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                />
            </BodyComponent>
        </View>
    );
};