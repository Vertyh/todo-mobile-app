import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderRight from './Header/HeaderRight';
import AddItemModal from './Modals/AddItemModal';
import EditItemModal from './Modals/EditItemModal';
import ItemsDisplayMode from './Views/ItemsDisplayMode';
import ItemsEditMode from './Views/ItemsEditMode';
import { fetchItemsData, cleanItemsData } from '../../redux/actions/items';

// ---------------------------------------------------------------------------------------
// Styled components

import DefaultContainer from '../Common/Containers/DefaultContainer';

// ---------------------------------------------------------------------------------------
// Redux

@connect((store) => {
    return {
        editing: store.items.editing
    }
})

class SingleList extends Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`,
        headerStyle: {
            height: 85,
            backgroundColor: '#efefef'
        },
        headerTitleStyle: {
            fontSize: 22,
            color: '#4286f4',
            maxWidth: 110
        },
        headerRight: <HeaderRight listKey={navigation.state.params.key} />
    });

    componentDidMount() {
        this.props.dispatch(fetchItemsData(this.props.navigation.state.params.key));
    }

    componentWillUnmount() {
        this.props.dispatch(cleanItemsData());
    }

    render() {
        let list = <ItemsDisplayMode />;

        if(this.props.editing) {
            list = <ItemsEditMode />;
        }
        return (
            <DefaultContainer>
                <AddItemModal />
                <EditItemModal />
                {list}
            </DefaultContainer>
        );
    }
}

export default SingleList;