import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    listWrapper: {
        flexDirection: "row",
        alignSelf: "stretch",
        borderBottomWidth: 1,
        borderBottomColor: "#D2D3E3",
    },
    listTextWrapper: {
        flex: 0.85,
        padding: 25
    },
    listDisplayTextWrapper: {
        flex: 1,
        padding: 25
    },
    listText: {
        fontSize: 24,
        color: "#444"
    },
    listActionIconWrapper: {
        flex: 0.15,
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 25
    }
});