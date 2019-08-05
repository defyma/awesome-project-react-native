import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import {Animated, Easing} from 'react-native';

//import All Screen
import Root from '../Pages/Root';
import Login from '../Pages/Login/Login';

import Main from '../Pages/Main/Main';
import Surat from '../Pages/Main/Surat';

const noTransitionConfig = () => ({
    transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
    },
});

//Login Navigation
const LoginStackNavigation = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        transitionConfig: () => noTransitionConfig(),
    },
);

//Main Navigation
const MainStackNavigation = createStackNavigator(
    {
        Home: {
            screen: Main,
            navigationOptions: {
                header: null,
            },
        },
        Surat: {
            screen: Surat,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        transitionConfig: () => noTransitionConfig(),
    },
);

export default createAppContainer(createSwitchNavigator(
    {
        Root: Root, //for logic state
        Login: LoginStackNavigation,
        Main: MainStackNavigation,
    },
    {
        initialRouteName: 'Root',
    },
));
