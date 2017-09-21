import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import styles from '../../../styles/ItemsList/ItemsDisplayList';
import { connect } from 'react-redux';
import { toggleToDoItem } from '../../../redux/actions';

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

export default connect((store) => {
    return {
        shouldFetch: store.shouldFetch,
        todos: store.todos,
        editing: store.editing
    }
})(ItemsDisplayList);