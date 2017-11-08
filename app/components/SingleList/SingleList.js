import React, { Component } from 'react';
import {
    View
} from 'react-native';
import styles from '../../styles/Common';
import AddItem from './AddItem/AddItem';
import ItemsList from './ItemsList/ItemsList';

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
    render() {
        return (
            <View style={styles.container}>
                <AddItem listKey={this.props.navigation.state.params.key} />
                <ItemsList listKey={this.props.navigation.state.params.key} />
            </View>
        );
    }
}

export default SingleList