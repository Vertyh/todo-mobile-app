import React, {Component} from 'react';
import {
    View,
    Button
} from 'react-native';
import styles from '../../../styles/Lists/Lists';
import { connect } from 'react-redux';
import { openAddModal, fetchListsData } from '../../../redux/actions/lists';

class AddList extends Component {
    openModal() {
        this.props.dispatch(openAddModal());
    }
    refreshLists() {
        this.props.dispatch(fetchListsData());
    }
    render() {
        return (
            <View style={styles.addListBtnWrapper}>
                <Button
                    title="Add list"
                    onPress={() => this.openModal()}
                />
                <Button
                    title="Refresh"
                    onPress={() => this.refreshLists()}
                    color="#2c632f"
                />
            </View>
        )
    }
}

export default connect((store) => {
    return {}
})(AddList);