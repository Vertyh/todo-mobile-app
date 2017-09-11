import React, {Component} from 'react';

import { connect } from 'react-redux';
import ItemsDisplayList from './ItemsDisplayList';
import ItemsEditList from './ItemsEditList';

class ItemsList extends Component {
    render() {
        if(this.props.editing) {
            return <ItemsEditList />
        }

        return <ItemsDisplayList />
    }
}

export default connect((store) => {
    return {
        editing: store.editing
    }
})(ItemsList);