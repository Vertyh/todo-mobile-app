import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { removeList, openEditModal } from '../../../redux/actions/lists';

// ---------------------------------------------------------------------------------------
// Styled components

import ListWrapper from '../../Common/Views/ListWrapper';
import ListEditTextWrapper from '../../Common/Views/ListEditTextWrapper';
import ListText from '../../Common/Views/ListText';
import ListActionIconWrapper from '../../Common/Views/ListActionIconWrapper';

// ---------------------------------------------------------------------------------------
// Redux

@connect((store) => {
    return {
        lists: store.lists.lists
    }
})

class ListsEditMode extends Component {
    openEditModal(list) {
        this.props.dispatch(openEditModal(list));
    }

    removeList(key) {
        this.props.dispatch(removeList(key));
    }

    render() {
        return (
            <FlatList
                data={this.props.lists}
                renderItem={
                    ({item}) =>
                        <ListWrapper>
                            <ListEditTextWrapper
                                onPress={() => this.openEditModal(item)}
                            >
                                <ListText>
                                    {item.list_name}
                                </ListText>
                            </ListEditTextWrapper>

                            <ListActionIconWrapper
                                onPress={() => this.removeList(item.key)}
                            >
                                <Icon
                                    name='close'
                                    type='material-community'
                                    size={46}
                                    color="#FF3A3D"
                                />
                            </ListActionIconWrapper>
                        </ListWrapper>
                }
            />
        )
    }
}

export default ListsEditMode;