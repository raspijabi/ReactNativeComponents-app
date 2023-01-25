import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'

export const TextInputScreen = () => {

    const { form, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title={'Inputs'} />
                        <TextInput
                            style={stylesInput.inputStyle}
                            placeholder='Ingrese su nombre'
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput
                            style={stylesInput.inputStyle}
                            placeholder='Ingrese su email'
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                            keyboardAppearance='dark'
                        />
                        <View style={stylesInput.switchRow}>
                            <Text style={stylesInput.switchText}>Subscribirse:</Text>
                            <CustomSwitch isOn={form.isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
                        </View>
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <TextInput
                            style={stylesInput.inputStyle}
                            placeholder='Ingrese su teléfono'
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                        />
                        <View style={{ height: 100 }} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesInput = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    switchText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    }
})