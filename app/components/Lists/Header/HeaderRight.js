import React, {Component} from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../../../styles/Common/HeaderRight';
import { connect } from 'react-redux';
import { openAddModal, fetchListsData, toggleEdit } from '../../../redux/actions/lists';

@connect ((store) => {
    return {
        editing: store.lists.editing
    }
})

class AddList extends Component {
    openModal() {
        this.props.dispatch(openAddModal());
    }

    toggleEditMode() {
        let editing = !this.props.editing;
        this.props.dispatch(toggleEdit(editing));
    }

    refreshLists() {
        this.props.dispatch(fetchListsData());
    }

    render() {
        return (
            <View style={styles.headerRightWrapper}>
                <TouchableOpacity
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
                    onPress={() => this.toggleEditMode()}
                    style={styles.headerRightBtnEdit}
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
                    onPress={() => this.refreshLists()}
                    style={styles.headerRightBtnEdit}
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