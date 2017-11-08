import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import styles from '../../../styles/ItemsList/ItemsDisplayList';
import { connect } from 'react-redux';
import { toggleItem } from '../../../redux/actions/items';

class ItemsDisplayList extends Component {
    markItem(item) {
        this.props.dispatch(toggleItem(item.key, item.status));
    }
    render() {
        return (
            <FlatList
                style={styles.listWrapper}
                data={this.props.items}
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
        items: store.items.items,
        editing: store.items.editing
    }
})(ItemsDisplayList);