import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';

import ItemEditModal from './ItemEditModal';

import { connect } from 'react-redux';
import { removeToDo, openEditModal } from '../../redux/actions';

class ItemsEditList extends Component {
    editItem(item) {
        this.props.dispatch(openEditModal(item));
    }
    removeItem(key) {
        this.props.dispatch(removeToDo(key));
    }
    render() {
        return (
            <View>
                <ItemEditModal />
                <FlatList
                    style={styles.listWrapper}
                    data={this.props.todos}
                    renderItem={
                        ({item}) =>
                            <View style={styles.listItemWrapper}>
                                <TouchableOpacity
                                    style={styles.listItemTextWrapper}
                                    onPress={() => this.editItem(item)}
                                >
                                    <Text style={(item.status) ? [styles.listItemText, styles.listItemCheckedText] : styles.listItemText}>
                                        {item.content}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.listItemRemoveWrapper}
                                    onPress={() => this.removeItem(item.key)}
                                >
                                    <Text style={styles.listItemRemoveText}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listWrapper: {
        marginTop: 3
    },
    listItemWrapper: {
        flexDirection: "row",
        alignSelf: "stretch",
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: "#FFF",
        marginBottom: 3
    },
    listItemTextWrapper: {
        flex: 0.7
    },
    listItemText: {
        fontSize: 24
    },
    listItemCheckedText: {
        textDecorationLine: "line-through"
    },
    listItemRemoveWrapper: {
        flex: 0.3,
        alignItems: "center",
        justifyContent: "center"
    },
    listItemRemoveText: {
        color: "red",
        fontSize: 20
    }
});

export default connect((store) => {
    return {
        todos: store.todos,
        editModalActive: store.editModalActive
    }
})(ItemsEditList);

AppRegistry.registerComponent('ItemsEditList', () => ItemsEditList);