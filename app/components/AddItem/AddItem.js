import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import { addToDo, toggleEdit } from '../../redux/actions';

class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }
    addItem() {
        if(this.state.item !== '') {
            this.props.dispatch(addToDo(this.state.item));
            this.setState({ item: '' });
        }
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
                    value={this.state.item}
                    onChangeText={(text) => this.setState({item: text})}
                    onSubmitEditing={() => this.addItem()}
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

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
    },
    addInput: {
        flex: 0.8,
        height: 70,
        fontSize: 22,
        paddingHorizontal: 15,
        color: "#FFF",
        backgroundColor: "rgba(255, 255, 255, 0.3)"
    },
    editButtonWrapper: {
        flex: 0.2,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10
    }
});

export default connect((store) => {
    return {
        editing: store.editing
    }
})(AddItem);