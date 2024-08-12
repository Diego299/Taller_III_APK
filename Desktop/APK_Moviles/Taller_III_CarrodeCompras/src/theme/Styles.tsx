import { StyleSheet } from "react-native";
import { SECUNDARY_COLOR, INPUT_COLOR, PRIMARY_COLOR } from "../Constantes/Constante";

export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 50,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 35,
        paddingHorizontal: 20,
        paddingTop: 50
    },
    titleHeaderBody: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    textBody: {
        fontSize: 15
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    contentInput: {
        marginTop: 30,
        gap: 10
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword:{
        position:'absolute',
        right:20,
        zIndex:1, 
        marginTop:10
    },
    textRedirection:{
        marginTop:30,
        fontSize:16,
        color:PRIMARY_COLOR,
        fontWeight:'bold',
        textAlign:'center'
    },

    productCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    productImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    productInfo: {
        marginTop: 10,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    productPrice: {
        fontSize: 16,
        color: PRIMARY_COLOR,
        marginVertical: 5,
    },
    
});