import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/core'

export const FlatListMenuItem = ({ menuItem }) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container}>
                <Icon name={menuItem.icon} color='#5956D6' size={23} />
                <Text style={styles.itemText}>{menuItem.name}</Text>
                <Icon name={'arrow-forward-outline'} color='#5956D6' size={23} />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19,
        flex: 1,
        color: 'black'
    },
})