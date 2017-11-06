import React, {Component} from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../../../styles/Lists/Lists';
import { connect } from 'react-redux';
import { openAddModal, fetchListsData, toggleEdit } from '../../../redux/actions/lists';

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
            <View style={styles.addListBtnWrapper}>
                <TouchableOpacity
                    onPress={() => this.openModal()}
                >
                    <View style={styles.addListBtnInner}>
                        <Icon
                            name='plus'
                            type='material-community'
                            size={36}
                            color="#fff"
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.toggleEditMode()}
                >
                    <View style={styles.addListBtnInner}>
                        <Icon
                            name='edit'
                            type='material-icons'
                            size={40}
                            color="#fff"
                        />
                    </View>
                </TouchableOpacity>
                {/*<Button*/}
                    {/*title="Refresh"*/}
                    {/*onPress={() => this.refreshLists()}*/}
                    {/*color="#2c632f"*/}
                {/*/>*/}
            </View>
        )
    }
}

export default connect((store) => {
    return {
        editing: store.lists.editing
    }
})(AddList);