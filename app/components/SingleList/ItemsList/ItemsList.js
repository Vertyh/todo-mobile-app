import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchItemsData } from '../../../redux/actions/items';
import ItemsDisplayList from './ItemsDisplayList';
import ItemsEditList from './ItemsEditList';

class ItemsList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchItemsData(this.props.listKey));
        this.timer = setInterval(() => {
            this.props.dispatch(fetchItemsData(this.props.listKey));
        }, 10000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        if(this.props.editing) {
            return <ItemsEditList />
        }

        return <ItemsDisplayList />
    }
}

export default connect((store) => {
    return {
        editing: store.items.editing
    }
})(ItemsList);