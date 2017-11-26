import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { openItemAddModal, fetchItemsData, toggleItemEdit } from '../../../redux/actions/items';

// ---------------------------------------------------------------------------------------
// Styled components

import HeaderRightWrapper from '../../Common/Header/HeaderRightWrapper';
import HeaderRightInner from '../../Common/Header/HeaderRightInner';
import HeaderRightCustomButton from '../../Common/Header/HeaderRightCustomButton';

// ---------------------------------------------------------------------------------------
// Redux

@connect((store) => {
    return {
        editing: store.items.editing
    }
})

class AddList extends Component {
    openModal() {
        this.props.dispatch(openItemAddModal());
    }

    toggleEditMode() {
        let editing = !this.props.editing;
        this.props.dispatch(toggleItemEdit(editing));
    }

    refreshLists() {
        this.props.dispatch(fetchItemsData(this.props.listKey));
    }

    render() {
        return (
            <HeaderRightWrapper>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => this.openModal()}
                >
                    <HeaderRightInner>
                        <Icon
                            name='plus'
                            type='material-community'
                            size={34}
                            color="#fff"
                        />
                    </HeaderRightInner>
                </TouchableOpacity>

                <HeaderRightCustomButton
                    activeOpacity={0.5}
                    onPress={() => this.toggleEditMode()}
                >
                    <HeaderRightInner>
                        <Icon
                            name='edit'
                            type='material-icons'
                            size={30}
                            color="#fff"
                        />
                    </HeaderRightInner>
                </HeaderRightCustomButton>

                <HeaderRightCustomButton
                    activeOpacity={0.5}
                    onPress={() => this.refreshLists()}
                >
                    <HeaderRightInner>
                        <Icon
                            name='refresh'
                            type='material-icons'
                            size={32}
                            color="#fff"
                        />
                    </HeaderRightInner>
                </HeaderRightCustomButton>
            </HeaderRightWrapper>
        )
    }
}

export default AddList;