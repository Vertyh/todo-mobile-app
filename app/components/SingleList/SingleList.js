import React, { Component } from 'react';
import {
    View
} from 'react-native';
import styles from '../../styles/Common';
import AddItem from './AddItem/AddItem';
import ItemsList from './ItemsList/ItemsList';
import { StackNavigator } from 'react-navigation';

class SingleList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddItem />
                <ItemsList />
            </View>
        );
    }
}

export default SingleList