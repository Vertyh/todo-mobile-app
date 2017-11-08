import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from '../../../styles/ItemsList/ItemsEditList';
import { Icon } from 'react-native-elements';
import ItemEditModal from '../ItemsList/ItemEditModal';
import { connect } from 'react-redux';
import { removeItem, openEditModal } from '../../../redux/actions/items';

class ItemsEditList extends Component {
    editItem(item) {
        this.props.dispatch(openEditModal(item));
    }
    removeItem(key) {
        this.props.dispatch(removeItem(key));
    }
    render() {
        return (
            <View>
                <ItemEditModal />
                <FlatList
                    style={styles.listWrapper}
                    data={this.props.items}
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
                                    <Icon
                                        name='remove'
                                        type='font-awesome'
                                        size={40}
                                        color="#FF3A3D"
                                    />
                                </TouchableOpacity>
                            </View>
                    }
                />
            </View>
        )
    }
}

export default connect((store) => {
    return {
        items: store.items.items
    }
})(ItemsEditList);