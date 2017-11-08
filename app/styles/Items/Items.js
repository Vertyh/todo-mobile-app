import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    itemWrapper: {
        flexDirection: "row",
        alignSelf: "stretch",
        borderBottomWidth: 2,
        borderBottomColor: "#D2D3E3",
        paddingVertical: 25,
        paddingHorizontal: 20
    },
    itemText: {
        fontSize: 24,
        color: "#444",
        paddingLeft: 20
    },
    itemTextChecked: {
        textDecorationLine: "line-through",
        color: "#D2D3E3"
    },
    itemEditWrapper: {
        flexDirection: "row",
        alignSelf: "stretch",
        borderBottomWidth: 2,
        borderBottomColor: "#D2D3E3"
    },
    itemEditTextWrapper: {
        flex: 0.85,
        paddingVertical: 25
    },
    itemEditRemoveBtn: {
        flex: 0.15,
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 25
    }
});