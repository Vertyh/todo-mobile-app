import React, {Component} from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
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
    return {}
})(AddList);