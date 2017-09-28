let defaultState = {
    lists: [],
    addModalActive: false,
    editModalActive: false,
    editList: {}
};

import * as api from '../../utils/api';
import * as utils from '../../utils/common';
import * as itemsUtils from '../../utils/items';
import * as listsUtils from '../../utils/lists';

export default function reducer(state=defaultState, action) {
    switch(action.type) {
        case 'FETCH_LISTS_DATA': {
            return {
                ...state,
                lists: action.payload
            };
        }
        case 'FETCHING_LISTS_ERROR': {
            return { ...state }
        }
        case 'ADD_LIST': {
            let listKey = utils.generateUniqueKey();
            let newList = {
                key: listKey,
                list_key: listKey,
                list_name: action.payload
            };
            api.createList(newList);
            return {
                ...state,
                lists: [...state.lists, newList],
                addModalActive: false
            }
        }
        case 'OPEN_ADD_MODAL': {
            return {
                ...state,
                addModalActive: true
            }
        }
        case 'REMOVE_LIST': {
            let lists = itemsUtils.removeItem(state.lists, action.payload);
            api.removeList(action.payload);
            return {
                ...state,
                lists: lists
            }
        }
        case 'OPEN_LIST_EDIT_MODAL': {
            return {
                ...state,
                editModalActive: true,
                editList: action.payload
            }
        }
        case 'EDIT_LIST': {
            let lists = listsUtils.editList( [...state.lists ], action.payload);
            api.updateListName(action.payload.key, action.payload.list_name);
            return {
                ...state,
                lists: lists,
                editModalActive: false
            }
        }
        default: {
            return state;
        }
    }
}