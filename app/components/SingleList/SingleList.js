import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { connect } from 'react-redux';
import styles from '../../styles/Common';
import AddItem from './AddItem/AddItem';
import ItemsDisplayMode from './Views/ItemsDisplayMode';
import ItemsEditMode from './Views/ItemsEditMode';
import { fetchItemsData } from '../../redux/actions/items';

class SingleList extends Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`,
        headerStyle: {
            height: 85,
            backgroundColor: '#efefef'
        },
        headerTitleStyle: {
            fontSize: 22,
            color: '#4286f4'
        },
        // headerRight: <HeaderRight />
    });

    componentDidMount() {
        this.props.dispatch(fetchItemsData(this.props.listKey));
    }

    render() {
        let list = <ItemsDisplayMode />;

        if(this.props.editing) {
            list = <ItemsEditMode />;
        }
        return (
            <View style={styles.container}>
                <AddItem listKey={this.props.navigation.state.params.key} />
                {list}
            </View>
        );
    }
}

export default connect((store) => {
    return {
        editing: store.items.editing
    }
})(SingleList);