import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

// ---------------------------------------------------------------------------------------
// Styled components

import ListWrapper from '../../Common/Views/ListWrapper';
import ListDisplayTextWrapper from '../../Common/Views/ListDisplayTextWrapper';
import ListText from '../../Common/Views/ListText';

// ---------------------------------------------------------------------------------------
// Redux

@connect((store) => {
    return {
        lists: store.lists.lists
    }
})

class ListsDisplayMode extends Component {
    render() {
        return (
            <FlatList
                data={this.props.lists}
                renderItem={
                    ({item}) =>
                        <ListWrapper>
                            <ListDisplayTextWrapper
                                onPress={() => this.props.navigation.dispatch({ type: 'SingleList', payload: {key: item.key, title: item.list_name}})}
                            >
                                <ListText>
                                    {item.list_name}
                                </ListText>
                            </ListDisplayTextWrapper>
                        </ListWrapper>
                }
            />
        )
    }
}

export default ListsDisplayMode;