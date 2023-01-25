import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import prompt from 'react-native-prompt-android'

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "Titulo",
            "Mensaje de la alerta",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "destructive"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            {
                cancelable: true,
            }
        )
    }

    const showPrompt = () => {
        // Alert.prompt(
        //     '¿Está seguro?',
        //     'Esta acción no se puede revertir',
        //     (valor) => console.log('info: ', valor),
        //     'plain-text',
        //     'Hola Mundo',
        //     'email-address'
        // )

        prompt(
            'Enter password',
            'Enter your password to claim your 1.5B€ in lottery winnings',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel pressed'), style: 'cancel'},
                {text: 'OK', onPress: password => console.log('ok pressed: ', password)}
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        )
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title={'Alerts'} />
            <Button
                title='Mostrar Alerta'
                onPress={showAlert}
            />
            <View style={{ height: 10}}></View>
            <Button
                title='Mostrar Prompt'
                onPress={showPrompt}
            />
        </View>
    )
}