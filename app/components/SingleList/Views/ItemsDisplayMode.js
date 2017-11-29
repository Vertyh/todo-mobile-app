import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { toggleItem } from '../../../redux/actions/items';

// ---------------------------------------------------------------------------------------
// Styled components

import ItemWrapper from '../../Common/Views/ItemWrapper';
import ItemText from '../../Common/Views/ItemText';

// ---------------------------------------------------------------------------------------
// Redux

@connect((store) => {
    return {
        items: store.items.items,
        editing: store.items.editing
    }
})

class ItemsDisplayList extends Component {
    markItem(item) {
        this.props.dispatch(toggleItem(item.key, item.status));
    }
    render() {
        return (
            <FlatList
                data={this.props.items}
                renderItem={
                    ({item}) =>
                        <ItemWrapper
                            activeOpacity={0.5}
                            onPress={() => this.markItem(item)}
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
                        </ItemWrapper>
                }
            />
        )
    }
}

export default ItemsDisplayList;