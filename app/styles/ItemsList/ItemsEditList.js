import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    listWrapper: {
        marginTop: 3
    },
    listItemWrapper: {
        flexDirection: "row",
        alignSelf: "stretch",
        paddingHorizontal: 15,
        backgroundColor: "#FFF",
        marginBottom: 3
    },
    listItemTextWrapper: {
        flex: 0.8,
        paddingVertical: 20,
    },
    listItemText: {
        fontSize: 26
    },
    listItemCheckedText: {
        textDecorationLine: "line-through"
    },
    listItemRemoveWrapper: {
        flex: 0.2,
        alignItems: "center",
        justifyContent: "center"
    }
});