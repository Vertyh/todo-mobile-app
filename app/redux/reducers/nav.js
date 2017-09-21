import { AppNavigator } from '../../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';

const initialNavState = AppNavigator.router.getStateForAction('Home');

export default function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'Home':
            nextState = AppNavigator.router.getStateForAction(
                state
            );
            break;
        case 'Single':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Single', params: {title: action.payload.key} }),
                { ...state, currentList: action.payload }
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}