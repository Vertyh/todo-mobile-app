import { AppNavigator } from '../../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';

const INITIAL_NAV_STATE = AppNavigator.router.getStateForAction('Home');

export default function nav(state=INITIAL_NAV_STATE, action) {
    let nextState;
    switch (action.type) {
        case 'Home':
            nextState = AppNavigator.router.getStateForAction(
                state
            );
            break;
        case 'Single':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: 'Single',
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