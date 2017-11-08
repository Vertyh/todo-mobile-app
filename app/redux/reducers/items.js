let defaultState = {
    items: [],
    currentList: '',
    editing: false,
    addModalActive: false,
    editModalActive: false,
    editItem: {}
};

import * as utils from '../../utils/common';
import * as itemsUtils from '../../utils/items';
import * as api from '../../utils/api';

export default function reducer(state=defaultState, action) {
    switch(action.type) {
        case 'FETCH_ITEMS_DATA': {
            return {
                ...state,
                items: action.payload.items,
                currentList: action.payload.currentList
            };
        }
        case 'FETCHING_ITEMS_ERROR': {
            return { ...state }
        }
        case 'ADD_ITEM': {
            let newItem = {
                key: utils.generateUniqueKey(),
                status: 0,
                content: action.payload
            };
            api.saveItem({ ...newItem, item_key: newItem.key, list_key: state.currentList });
            return {
                ...state,
                items: [ ...state.items, newItem],
                addModalActive: false
            }
        }
        case 'REMOVE_ITEM': {
            let items = itemsUtils.removeItem(state.items, action.payload);
            api.removeItem(action.payload, state.currentList);
            return {
                ...state,
                items: items
            }
        }
        case 'EDIT_ITEM': {
            let items = itemsUtils.editItem( [...state.items ], action.payload, state.currentList);
            return {
                ...state,
                items: items,
                editModalActive: false
            }
        }
        case 'TOGGLE_ITEM_EDIT': {
            return {
                ...state,
                editing: action.payload
            }
        }
        case 'OPEN_ITEM_ADD_MODAL': {
            return {
                ...state,
                addModalActive: true
            }
        }
        case 'CLOSE_ITEM_ADD_MODAL': {
            return {
                ...state,
                addModalActive: false
            }
        }
        case 'OPEN_ITEM_EDIT_MODAL': {
            return {
                ...state,
                editModalActive: true,
                editItem: action.payload
            }
        }
        case 'CLOSE_ITEM_EDIT_MODAL': {
            return {
                ...state,
                editModalActive: false
            }
        }
        case 'TOGGLE_ITEM': {
            let items = itemsUtils.updateItemStatus( [ ...state.items ], action.payload, state.currentList);
            return {
                ...state,
                items: items
            }
        }
        default: {
            return state;
        }
    }
}