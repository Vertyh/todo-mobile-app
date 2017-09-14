import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    listWrapper: {
        marginTop: 3
    },
    listItem: {
        alignSelf: "stretch",
        fontSize: 26,
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: "#FFF",
        marginBottom: 3
    },
    listItemChecked: {
        textDecorationLine: "line-through",
        backgroundColor: "#EFEFEF",
        opacity: 0.8
    }
});