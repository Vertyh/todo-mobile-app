import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    listWrapper: {
        flexDirection: "row",
        alignSelf: "stretch",
        paddingHorizontal: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#D2D3E3",
        borderLeftWidth: 8,
        borderLeftColor: "#4286f4"
    },
    listTextWrapper: {
        flex: 0.7,
        paddingVertical: 25
    },
    listText: {
        fontSize: 24,
        color: "#444"
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
    },
    addListBtnInner: {
        borderRadius: 50,
        padding: 8,
        backgroundColor: "#F57173"
    }
});