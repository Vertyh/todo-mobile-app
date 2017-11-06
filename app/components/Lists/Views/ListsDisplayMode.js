import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import styles from '../../../styles/Lists/Lists';

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
                                style={styles.listTextWrapper}
                                onPress={() => this.props.navigation.dispatch({ type: 'Single', payload: {key: item.key, title: item.list_name}})}
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

export default connect((store) => {
    return {
        lists: store.lists.lists
    }
})(ListsDisplayMode);