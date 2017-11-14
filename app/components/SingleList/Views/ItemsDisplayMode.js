import React, {Component} from 'react';
import {
    FlatList,
    TouchableOpacity,
    Text
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../../../styles/Items/Items';
import { connect } from 'react-redux';
import { toggleItem } from '../../../redux/actions/items';

@connect((store) => {
    return {
        items: store.items.items,
        editing: store.items.editing
    }
})

class ItemsDisplayList extends Component {
    markItem(item) {
        this.props.dispatch(toggleItem(item.key, item.status));
    }
    render() {
        return (
            <FlatList
                data={this.props.items}
                renderItem={
                    ({item}) =>
                        <TouchableOpacity
                            style={styles.itemWrapper}
                            activeOpacity={0.5}
                            onPress={() => this.markItem(item)}
                        >
                            <Icon
                                name={item.status ? 'checkbox-marked' : 'checkbox-blank-outline'}
                                type='material-community'
                                size={30}
                                color={item.status ? '#F57173' : '#D2D3E3'}
                            />
                            <Text style={item.status ? [styles.itemText, styles.itemTextChecked] : styles.itemText}>
                                {item.content}
                            </Text>
                        </TouchableOpacity>
                }
            />
        )
    }
}

export default ItemsDisplayList;