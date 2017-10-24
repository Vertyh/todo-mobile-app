import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from '../../../styles/AddItem/AddItem';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { addItem, toggleEdit, fetchItemsData } from '../../../redux/actions/items';

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
    refreshList() {
        this.props.dispatch(fetchItemsData(this.props.listKey));
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
                <TouchableOpacity onPress={() => this.refreshList()} style={styles.refreshButtonWrapper}>
                    <Icon
                        name='refresh'
                        type='font-awesome'
                        size={34}
                        color="#fff"
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