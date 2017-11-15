import { AppNavigator } from '../../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';

const INITIAL_NAV_STATE = AppNavigator.router.getStateForAction('Lists');

export default function nav(state=INITIAL_NAV_STATE, action) {
    let nextState;
    switch (action.type) {
        case 'Login':
            nextState = AppNavigator.router.getStateForAction(
                state
            );
            break;
        case 'Lists':
            nextState = AppNavigator.router.getStateForAction(
                state
            );
            break;
        case 'SingleList':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: 'SingleList',
                    params: {
                        title: action.payload.title,
                        key: action.payload.key
                    }
                }), state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}