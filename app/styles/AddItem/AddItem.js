import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        flexDirection: "row",
    },
    addInput: {
        flex: 0.8,
        height: 70,
        fontSize: 22,
        paddingHorizontal: 15,
        color: "#FFF",
        backgroundColor: "rgba(255, 255, 255, 0.3)"
    },
    editButtonWrapper: {
        flex: 0.2,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10
    }
});