import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { TitleComponent } from '../Componentes/Titulo';
import { InputComponent } from '../Componentes/Aporte';
import { ButtonComponent } from '../Componentes/Boton';
import { BodyComponent } from '../Componentes/Cuerpo';
import { PRIMARY_COLOR } from '../Constantes/Constante';
import { styles } from '../theme/Styles';

interface FormLogin {
    email: string;
    password: string;
    username: string;
    phoneNumber: string;
    rememberMe: boolean;
}

interface User {
    id: number;
    email: string;
    password: string;
}

type RootStackParamList = {
    InicioSesion: undefined;
    Registro: undefined;
    PantallaInicio: undefined;
};

export const PantallaInicioSesion = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const users: User[] = [
        { id: 1, email: 'dfalcones@gmail.com', password: '123456' },
        { id: 2, email: 'dfalcones777@gmail.com', password: '123456' },
        { id: 3, email: 'dfalcones888@gmail.com', password: '123456' }
    ];

    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: '',
        username: '',
        phoneNumber: '',
        rememberMe: false
    });

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    const handleSetValues = (name: string, value: string) => {
        setFormLogin({ ...formLogin, [name]: value });
    };

    const handleSignIn = () => {
        
        if (!formLogin.email || !formLogin.password || !formLogin.username || !formLogin.phoneNumber) {
            Alert.alert(
                'Error',
                'Por favor, ingrese valores en todos los campos!'
            );
            return;
        }
       
        if (!verifyUser()) {
            Alert.alert(
                'Error',
                'Correo y/o contraseña incorrecta!'
            );
            return;
        }
        
        navigation.navigate('PantallaInicio');
    };

    const verifyUser = (): User | null => {
        const existUser = users.filter(user => user.email === formLogin.email && user.password === formLogin.password)[0];
        return existUser || null;
    };

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Iniciar Sesión' />
            <BodyComponent>
                <View>
                    <Text style={styles.titleHeaderBody}>Bienvenido a la Interfaz Principal</Text>
                    <Text style={styles.textBody}>Realizar tus consultas de manera más rápida y eficaz</Text>
                </View>
                <View style={styles.contentInput}>
                    <InputComponent
                        placeholder='Nombre de usuario'
                        handleSetValues={handleSetValues}
                        name='username' />
                    <InputComponent
                        placeholder='Correo'
                        handleSetValues={handleSetValues}
                        name='email' />
                    <InputComponent
                        placeholder='Contraseña'
                        handleSetValues={handleSetValues}
                        name='password'
                        isPassword={hiddenPassword}
                        hasIcon={true}
                        setHiddenPaswword={() => setHiddenPassword(!hiddenPassword)} />
                    <InputComponent
                        placeholder='Número de teléfono'
                        handleSetValues={handleSetValues}
                        name='phoneNumber' />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    </View>
                </View>
                <ButtonComponent textButton='Iniciar' onPress={handleSignIn} />
                <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                    <Text style={styles.textRedirection}>¿No tienes una cuenta? Regístrate ahora</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    );
};
