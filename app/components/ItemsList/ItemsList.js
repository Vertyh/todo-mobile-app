import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    FlatList,
    Text
} from 'react-native';

import { connect } from 'react-redux';

class ItemsList extends Component {
    markItem(item) {
        console.log(item);
    }
    render() {
        return (
            <FlatList
                style={styles.listWrapper}
                data={this.props.todos}
                renderItem={
                    ({item}) =>
                        <Text
                            style={styles.listItem}
                            onPress={this.markItem(item)}
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
    }
});

export default connect((store) => {
    return {
        todos: store.todos
    }
})(ItemsList);

AppRegistry.registerComponent('ItemsList', () => ItemsList);