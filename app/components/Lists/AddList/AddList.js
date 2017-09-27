import React, {Component} from 'react';
import {
    View,
    Button
} from 'react-native';
import styles from '../../../styles/Lists/Lists';
import { connect } from 'react-redux';
import { openAddModal } from '../../../redux/actions/lists';

class AddList extends Component {
    openModal() {
        this.props.dispatch(openAddModal());
    }
    render() {
        return (
            <View style={styles.addListBtnWrapper}>
                <Button
                    title="Add list"
                    onPress={() => this.openModal()}
                />
            </View>
        )
    }
}

export default connect((store) => {
    return {}
})(AddList);