import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import styles from '../../../styles/Lists/Lists';
import { removeList, openEditModal } from '../../../redux/actions/lists';

class ListsEditMode extends Component {
    openEditModal(list) {
        this.props.dispatch(openEditModal(list));
    }

    removeList(key) {
        this.props.dispatch(removeList(key));
    }

    render() {
        return (
            <FlatList
                data={this.props.lists}
                renderItem={
                    ({item}) =>
                        <View style={styles.listWrapper}>
                            <TouchableOpacity
                                style={styles.listTextWrapper}
                                onPress={() => this.openEditModal(item)}
                            >
                                <Text style={styles.listText}>
                                    {item.list_name}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.listActionIconWrapper}
                                onPress={() => this.removeList(item.key)}
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
        )
    }
}

export default connect((store) => {
    return {
        lists: store.lists.lists
    }
})(ListsEditMode);