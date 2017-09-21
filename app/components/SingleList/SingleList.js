import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { connect } from 'react-redux';
import styles from '../../styles/Common';
import AddItem from './AddItem/AddItem';
import ItemsList from './ItemsList/ItemsList';
import { StackNavigator } from 'react-navigation';

class SingleList extends Component {
    render() {
        console.log(this.props.currentList);
        return (
            <View style={styles.container}>
                <AddItem />
                <ItemsList />
            </View>
        );
    }
};

export default connect((store) => {
    return {
        currentList: store.nav.currentList,
    }
})(SingleList);