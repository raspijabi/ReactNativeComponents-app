import React from 'react'
import { Text, View } from 'react-native'
import { DefaultTheme, NavigationContainer, DarkTheme } from '@react-navigation/native'
import { Navigator } from './src/navigator/Navigator'


export const App = () => {
    return (
        <NavigationContainer>
            <Navigator/>
        </NavigationContainer>
    )
}
