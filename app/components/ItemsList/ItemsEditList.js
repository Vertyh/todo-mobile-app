import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { removeToDo } from '../../redux/actions';

class ItemsEditList extends Component {
    editItem() {

    }
    removeItem(key) {
        this.props.dispatch(removeToDo(key));
    }
    render() {
        return (
            <FlatList
                style={styles.listWrapper}
                data={this.props.todos}
                renderItem={
                    ({item}) =>
                        <View style={styles.listItemWrapper}>
                            <Text
                                style={styles.listItemText}
                                onPress={() => this.editItem()}
                            >
                                {item.content}
                            </Text>
                            <TouchableOpacity
                                style={styles.listItemRemoveWrapper}
                                onPress={() => this.removeItem(item.key)}
                            >
                                <Text style={styles.listItemRemoveText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                }
            />
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
    listItemText: {
        flex: 0.8,
        fontSize: 24
    },
    listItemRemoveWrapper: {
        flex: 0.2,
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
        todos: store.todos
    }
})(ItemsEditList);

AppRegistry.registerComponent('ItemsEditList', () => ItemsEditList);