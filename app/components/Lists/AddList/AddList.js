import React, {Component} from 'react';
import {
    View,
    Button
} from 'react-native';
import styles from '../../../styles/Lists/Lists';
import { connect } from 'react-redux';

class AddList extends Component {
    openModal() {
        alert(1);
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
    return {

    }
})(AddList);