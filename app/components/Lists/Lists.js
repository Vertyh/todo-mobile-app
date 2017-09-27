import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    Button
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import AddList from './AddList/AddList';
import AddListModal from './AddList/AddListModal';
import stylesCommon from '../../styles/Common';
import styles from '../../styles/Lists/Lists';

class Lists extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'All Lists',
        headerRight: <AddList/>
    });
    render() {
        return (
            <View style={stylesCommon.container}>
                <AddListModal />
                <FlatList
                    data={this.props.lists}
                    renderItem={
                        ({item}) =>
                            <View style={styles.listItemWrapper}>
                                <TouchableOpacity
                                    style={styles.listItemTextWrapper}
                                    onPress={() => this.props.navigation.dispatch({ type: 'Single', payload: {key: item.key, title: item.list_name}})}
                                >
                                    <Text style={styles.listItemText}>
                                        {item.list_name}
                                    </Text>
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