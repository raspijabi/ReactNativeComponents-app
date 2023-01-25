import React, { useState } from 'react'
import { View, Text, Animated, ActivityIndicator } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

export const FadeInImage = ({ uri, style }) => {

    const { opacity, fadeIn } = useAnimation()
    const [isLoading, setIsLoading] = useState(true)

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {
                isLoading && <ActivityIndicator style={{ position: 'absolute' }} color={'#5856D6'} size={30} />
            }
            <Animated.Image
                source={{ uri }}
                style={{...style, opacity}}
                // style={{
                //     width: '100%',
                //     height: 400,
                //     opacity
                // }}
                onLoad={() => {
                    setIsLoading(false)
                    fadeIn()
                }}
            />
        </View>
    )
}