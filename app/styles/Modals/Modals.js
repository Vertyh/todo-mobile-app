import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    baseModalWrapper: {
        flex: 0.8,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    modalInputWrapper: {
        flexDirection:'row',
    },
    baseModalInput: {
        flex: 1,
        fontSize: 22,
        padding: 25,
        backgroundColor: '#FFF'
    },
    modalButtons: {
        flexDirection: 'row'
    },
    modalConfirmBtn: {
        flex: 0.5,
        alignItems:'center',
        justifyContent:'center',
        height: 50,
        backgroundColor: '#FFF'
    },
    modalConfirmText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});