import React, { useState } from 'react'
import { View, Text, Switch, Platform } from 'react-native'

export const CustomSwitch = ({ isOn, onChange }) => {

    const [isEnabled, setIsEnabled] = useState(isOn)
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
        onChange(!isEnabled)
    }

    return (
        <Switch
            trackColor={{ false: "#D9D9DB", true: "#8f8ede" }}
            thumbColor={(Platform.OS === 'android') ? '#5856D6' : ''}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}