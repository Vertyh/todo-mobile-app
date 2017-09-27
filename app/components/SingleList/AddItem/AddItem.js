import React, {Component} from 'react';
import {
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from '../../../styles/AddItem/AddItem';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { addItem, toggleEdit } from '../../../redux/actions/items';

class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }
    addNewItem() {
        if(this.state.item === '') {
            return false;
        }
        this.props.dispatch(addItem(this.state.item));
        this.setState({ item: '' });
    }
    toggleEditMode() {
        let editing = !this.props.editing;
        this.props.dispatch(toggleEdit(editing));
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.addInput}
                    placeholder="Add Item"
                    placeholderTextColor="rgba(255, 255, 255, 0.9)"
                    underlineColorAndroid="transparent"
                    value={this.state.item}
                    onChangeText={(text) => this.setState({item: text})}
                    onSubmitEditing={() => this.addNewItem()}
                />
                <TouchableOpacity onPress={() => this.toggleEditMode()} style={styles.editButtonWrapper}>
                    <Icon
                        name='edit'
                        type='font-awesome'
                        size={40}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect((store) => {
    return {
        editing: store.items.editing
    }
})(AddItem);