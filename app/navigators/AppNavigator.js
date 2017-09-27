import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Lists from '../components/Lists/Lists';
import SingleList from '../components/SingleList/SingleList';

export const AppNavigator = StackNavigator({
    Home: {
        screen: Lists
    },
    Single: {
        screen: SingleList,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.title}`,
        }),
    }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

export default connect((state) => ({
    nav: state.nav
}))(AppWithNavigationState);