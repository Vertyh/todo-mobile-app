import React, {Component} from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../../../styles/Common/HeaderRight';
import { connect } from 'react-redux';
import { openItemAddModal, fetchItemsData, toggleItemEdit } from '../../../redux/actions/items';

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
            <View style={styles.headerRightWrapper}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => this.openModal()}
                >
                    <View style={styles.headerRightBtnInner}>
                        <Icon
                            name='plus'
                            type='material-community'
                            size={34}
                            color="#fff"
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.headerRightBtnEdit}
                    activeOpacity={0.5}
                    onPress={() => this.toggleEditMode()}
                >
                    <View style={styles.headerRightBtnInner}>
                        <Icon
                            name='edit'
                            type='material-icons'
                            size={30}
                            color="#fff"
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.headerRightBtnEdit}
                    activeOpacity={0.5}
                    onPress={() => this.refreshLists()}
                >
                    <View style={styles.headerRightBtnInner}>
                        <Icon
                            name='refresh'
                            type='material-icons'
                            size={32}
                            color="#fff"
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddList;