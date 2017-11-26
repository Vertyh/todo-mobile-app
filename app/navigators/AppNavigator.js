import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Login from '../components/Login/Login';
import Lists from '../components/Lists/Lists';
import SingleList from '../components/SingleList/SingleList';

export const AppNavigator = StackNavigator({
    // Login: {
    //     screen: Login
    // },
    Lists: {
        screen: Lists
    },
    SingleList: {
        screen: SingleList
    }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

export default connect((state) => ({
    nav: state.nav
}))(AppWithNavigationState);