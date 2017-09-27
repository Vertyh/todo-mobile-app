let defaultState = {
    lists: [
        {
            list_name: 'Zakupy',
            list_key: 'key_1506534179170738veso45yh'
        },
        {
            list_name: 'costam',
            list_key: 'key_1506534196148sm9u0hrihma'
        }
    ]
};

export default function reducer(state=defaultState, action) {
    switch(action.type) {
        case 'FETCH_API_DATA': {
            return {
                ...state,
                lists: action.payload
            };
        }
        default: {
            return state;
        }
    }
}