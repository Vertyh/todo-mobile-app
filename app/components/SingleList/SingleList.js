import React, { Component } from 'react';
import {
    View
} from 'react-native';

import AddItem from './AddItem/AddItem';
import ItemsList from './ItemsList/ItemsList';

class SingleList extends Component {
    render() {
        return (
            <View>
                <AddItem />
                <ItemsList />
            </View>
        );
    }
};

export default SingleList;