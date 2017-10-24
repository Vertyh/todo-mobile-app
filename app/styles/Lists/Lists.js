import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    listWrapper: {
        flexDirection: "row",
        alignSelf: "stretch",
        paddingHorizontal: 15,
        backgroundColor: "#e8c012",
        borderBottomWidth: 2,
        borderBottomColor: "#000",
    },
    listTextWrapper: {
        flex: 0.7,
        paddingVertical: 20,
    },
    listText: {
        fontSize: 24,
        color: "#000"
    },
    addListBtnWrapper: {
        paddingRight: 10,
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    listActionIconWrapper: {
        flex: 0.15,
        alignItems: "center",
        justifyContent: "center"
    }
});