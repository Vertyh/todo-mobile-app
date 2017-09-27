import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    listItemWrapper: {
        flexDirection: "row",
        alignSelf: "stretch",
        paddingHorizontal: 15,
        backgroundColor: "#e8c012",
        borderBottomWidth: 2,
        borderBottomColor: "#000",
    },
    listItemTextWrapper: {
        flex: 0.8,
        paddingVertical: 20,
    },
    listItemText: {
        fontSize: 24,
        color: "#000"
    },
    addListBtnWrapper: {
        paddingRight: 10
    }
});