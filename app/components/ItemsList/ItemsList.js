import React, {Component} from 'react';
import {
    AppRegistry,
    Text
} from 'react-native';

import { connect } from 'react-redux';
import ItemsDisplayList from './ItemsDisplayList';

class ItemsList extends Component {
    render() {
        if(this.props.editing) {
            return <Text>Editing</Text>
        }

        return <ItemsDisplayList />
    }
}

export default connect((store) => {
    return {
        editing: store.editing
    }
})(ItemsList);

AppRegistry.registerComponent('ItemsList', () => ItemsList);