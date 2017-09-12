import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    Text
} from 'react-native';

import { connect } from 'react-redux';
import { toggleToDoItem } from '../../redux/actions';

class ItemsDisplayList extends Component {
    markItem(item) {
        this.props.dispatch(toggleToDoItem(item.key, item.status));
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
                            onPress={() => this.markItem(item)}
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

export default connect((store) => {
    return {
        shouldFetch: store.shouldFetch,
        todos: store.todos,
        editing: store.editing
    }
})(ItemsDisplayList);