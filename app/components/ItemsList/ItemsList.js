import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    FlatList,
    Text
} from 'react-native';

import { connect } from 'react-redux';
import { toggleToDoItem } from '../../redux/actions';

class ItemsList extends Component {
    markItem(itemId) {
        this.props.dispatch(toggleToDoItem(itemId));
    }
    render() {
        return (
            <FlatList
                style={styles.listWrapper}
                data={this.props.todos}
                renderItem={
                    ({item}) =>
                        <Text
                            style={(item.status) ? [styles.listItem, styles.listItemChecked] : styles.listItem}
                            onPress={() => this.markItem(item.key)}
                        >
                            {item.content}
                        </Text>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    listWrapper: {
        marginTop: 3
    },
    listItem: {
        alignSelf: "stretch",
        fontSize: 24,
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: "#FFF",
        marginBottom: 3
    },
    listItemChecked: {
        textDecorationLine: "line-through"
    }
});

export default connect((store) => {
    return {
        todos: store.todos
    }
})(ItemsList);

AppRegistry.registerComponent('ItemsList', () => ItemsList);