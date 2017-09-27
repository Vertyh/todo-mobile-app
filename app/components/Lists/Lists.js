import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import styles from '../../styles/Common';

class Lists extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.lists}
                    renderItem={
                        ({item}) =>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.dispatch({ type: 'Single', payload: {key: item.key, title: item.list_name}})}
                                >
                                    <Text>
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