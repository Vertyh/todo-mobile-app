let defaultState = {
    items: [],
    editing: false,
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
                items: action.payload
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
            api.saveItem(newItem);
            return {
                ...state,
                items: [ ...state.items, newItem]
            }
        }
        case 'REMOVE_ITEM': {
            let items = itemsUtils.removeItem(state.items, action.payload);
            api.removeItem(action.payload);
            return {
                ...state,
                items: items
            }
        }
        case 'EDIT_ITEM': {
            let items = itemsUtils.editItem( [...state.items ], action.payload);
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
        case 'OPEN_EDIT_MODAL': {
            return {
                ...state,
                editModalActive: true,
                editItem: action.payload
            }
        }
        case 'TOGGLE_ITEM': {
            let items = itemsUtils.updateItemStatus( [ ...state.items ], action.payload);
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