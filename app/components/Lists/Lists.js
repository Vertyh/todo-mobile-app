import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { connect } from 'react-redux';
import HeaderRight from './Header/HeaderRight';
import AddListModal from './Modals/AddListModal';
import EditListModal from './Modals/EditListModal';
import ListsDisplayMode from './Views/ListsDisplayMode';
import ListsEditMode from './Views/ListsEditMode';
import stylesCommon from '../../styles/Common';
import { fetchListsData } from '../../redux/actions/lists';

@connect((store) => {
    return {
        editing: store.lists.editing
    }
})

class Lists extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'All Lists',
        headerStyle: {
            height: 85,
            paddingHorizontal: 3,
            backgroundColor: '#efefef'
        },
        headerTitleStyle: {
            fontSize: 22,
            color: '#4286f4'
        },
        headerRight: <HeaderRight />
    });

    componentDidMount() {
        this.props.dispatch(fetchListsData());
    }

    render() {
        let lists = <ListsDisplayMode navigation={this.props.navigation} />;

        if(this.props.editing) {
            lists = <ListsEditMode navigation={this.props.navigation} />;
        }

        return (
            <View style={stylesCommon.container}>
                <AddListModal />
                <EditListModal />
                {lists}
            </View>
        );
    }
}

export default Lists;