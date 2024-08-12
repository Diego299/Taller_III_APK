import { createStackNavigator } from '@react-navigation/stack';
import { PRIMARY_COLOR } from '../Constantes/Constante';
import { PantallaInicioSesion } from '../screens/Inicio';
import { PantallaRegistro } from '../screens/Registro';
import { PantallaInicio } from '../screens/PantallaPrincipal';


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle:{
                    backgroundColor:PRIMARY_COLOR
                }
            }}>
            <Stack.Screen name="InicioSesion" options={{ headerShown: false }} component={PantallaInicioSesion} />
            <Stack.Screen name="Registro" options={{ headerShown: false }} component={PantallaRegistro} />
            <Stack.Screen name="PantallaInicio" options={{ headerShown: false }} component={PantallaInicio} />
        </Stack.Navigator>
    );
}