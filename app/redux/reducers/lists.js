let defaultState = {
    lists: [
        {
            list_name: 'Zakupy',
            key: 'key_1506534179170738veso45yh'
        },
        {
            list_name: 'Trening',
            key: 'key_1506534196148sm9u0hrihma'
        }
    ],
    addModalActive: false
};

import * as utils from '../../utils/common';

export default function reducer(state=defaultState, action) {
    switch(action.type) {
        case 'FETCH_LISTS_DATA': {
            return {
                ...state,
                lists: action.payload
            };
        }
        case 'ADD_LIST': {
            let newList = {
                key: utils.generateUniqueKey(),
                list_name: action.payload
            };
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
        default: {
            return state;
        }
    }
}