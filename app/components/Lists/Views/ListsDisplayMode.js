import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import styles from '../../../styles/Lists/Lists';

@connect((store) => {
    return {
        lists: store.lists.lists
    }
})

class ListsDisplayMode extends Component {
    render() {
        console.log(this.props);
        return (
            <FlatList
                data={this.props.lists}
                renderItem={
                    ({item}) =>
                        <View style={styles.listWrapper}>
                            <TouchableOpacity
                                style={styles.listDisplayTextWrapper}
                                onPress={() => this.props.navigation.dispatch({ type: 'SingleList', payload: {key: item.key, title: item.list_name}})}
                            >
                                <Text style={styles.listText}>
                                    {item.list_name}
                                </Text>
                            </TouchableOpacity>
                        </View>
                }
            />
        )
    }
}

export default ListsDisplayMode;