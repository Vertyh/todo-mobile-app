import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { removeItem, openEditModal } from '../../../redux/actions/items';

// ---------------------------------------------------------------------------------------
// Styled components

import ListWrapper from '../../Common/Views/ListWrapper';
import ItemEditTextWrapper from '../../Common/Views/ItemEditTextWrapper';
import ItemEditRemoveBtn from '../../Common/Views/ItemEditRemoveBtn';
import ItemText from '../../Common/Views/ItemText';

// ---------------------------------------------------------------------------------------
// Redux

@connect((store) => {
    return {
        items: store.items.items
    }
})

class ItemsEditList extends Component {
    editItem(item) {
        this.props.dispatch(openEditModal(item));
    }
    removeItem(key) {
        this.props.dispatch(removeItem(key));
    }
    render() {
        return (
            <FlatList
                data={this.props.items}
                renderItem={
                    ({item}) =>
                        <ListWrapper>
                            <ItemEditTextWrapper
                                activeOpacity={0.5}
                                onPress={() => this.editItem(item)}
                            >
                                <Icon
                                    name={item.status ? 'checkbox-marked' : 'checkbox-blank-outline'}
                                    type='material-community'
                                    size={30}
                                    color={item.status ? '#F57173' : '#D2D3E3'}
                                />
                                <ItemText status={item.status}>
                                    {item.content}
                                </ItemText>
                            </ItemEditTextWrapper>
                            <ItemEditRemoveBtn
                                activeOpacity={0.5}
                                onPress={() => this.removeItem(item.key)}
                            >
                                <Icon
                                    name='close'
                                    type='material-community'
                                    size={46}
                                    color="#FF3A3D"
                                />
                            </ItemEditRemoveBtn>
                        </ListWrapper>
                }
            />
        )
    }
}

export default ItemsEditList;