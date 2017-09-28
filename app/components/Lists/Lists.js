import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import AddList from './AddList/AddList';
import AddListModal from './AddList/AddListModal';
import EditListModal from './EditList/EditListModal';
import stylesCommon from '../../styles/Common';
import styles from '../../styles/Lists/Lists';
import { removeList, openEditModal } from '../../redux/actions/lists';

class Lists extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'All Lists',
        headerRight: <AddList />
    });
    openEditModal(list) {
        this.props.dispatch(openEditModal(list));
    }
    removeList(key) {
        this.props.dispatch(removeList(key));
    }
    render() {
        return (
            <View style={stylesCommon.container}>
                <AddListModal />
                <EditListModal />
                <FlatList
                    data={this.props.lists}
                    renderItem={
                        ({item}) =>
                            <View style={styles.listWrapper}>
                                <TouchableOpacity
                                    style={styles.listTextWrapper}
                                    onPress={() => this.props.navigation.dispatch({ type: 'Single', payload: {key: item.key, title: item.list_name}})}
                                >
                                    <Text style={styles.listText}>
                                        {item.list_name}
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.listActionIconWrapper}
                                    onPress={() => this.openEditModal(item)}
                                >
                                    <Icon
                                        name='edit'
                                        type='entypo'
                                        size={40}
                                        color="#000"
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.listActionIconWrapper}
                                    onPress={() => this.removeList(item.key)}
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
        );
    }
}

export default connect((store) => {
    return {
        lists: store.lists.lists
    }
})(Lists);