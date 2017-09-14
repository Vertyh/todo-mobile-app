import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from '../../styles/ItemsList/ItemsEditList';
import { Icon } from 'react-native-elements';
import ItemEditModal from './ItemEditModal';
import { connect } from 'react-redux';
import { removeToDo, openEditModal } from '../../redux/actions';

class ItemsEditList extends Component {
    editItem(item) {
        this.props.dispatch(openEditModal(item));
    }
    removeItem(key) {
        this.props.dispatch(removeToDo(key));
    }
    render() {
        return (
            <View>
                <ItemEditModal />
                <FlatList
                    style={styles.listWrapper}
                    data={this.props.todos}
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
        todos: store.todos,
        editModalActive: store.editModalActive
    }
})(ItemsEditList);