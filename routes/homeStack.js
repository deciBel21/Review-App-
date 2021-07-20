import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation'
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails"
import Header from "../shared/header";
import React from 'react'

const screens={
    Home: {
        screen:Home,
        navigationOptions:{
           headerTitle: () => <Header />,
            headerStyle: { backgroundColor: 'grey'}
        }
    },
    reviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title: 'Review Details',
            headerStyle: { backgroundColor: 'red'}
        }
    }
}

const HomeStack = createStackNavigator(screens ,{
    defaultNavigationOptions:{
        height:60,
        headerTintColor: '#444'
    }
});

export default createAppContainer(HomeStack);