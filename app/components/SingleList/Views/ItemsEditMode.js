import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from '../../../styles/Items/Items';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { removeItem, openEditModal } from '../../../redux/actions/items';

@connect((store) => {
    return {
        items: store.items.items
    }
})

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
                <FlatList
                    style={styles.listWrapper}
                    data={this.props.items}
                    renderItem={
                        ({item}) =>
                            <View style={styles.itemEditWrapper}>
                                <TouchableOpacity
                                    style={styles.itemEditTextWrapper}
                                    onPress={() => this.editItem(item)}
                                >
                                    <Icon
                                        name={item.status ? 'checkbox-marked' : 'checkbox-blank-outline'}
                                        type='material-community'
                                        size={30}
                                        color={item.status ? '#F57173' : '#D2D3E3'}
                                    />
                                    <Text style={(item.status) ? [styles.itemText, styles.itemTextChecked] : styles.itemText}>
                                        {item.content}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.itemEditRemoveBtn}
                                    onPress={() => this.removeItem(item.key)}
                                >
                                    <Icon
                                        name='close'
                                        type='material-community'
                                        size={46}
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

export default ItemsEditList;