import React, { useState } from 'react'
import { View, Text, ScrollView, RefreshControl } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets()

    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState()

    const onRefresh = () => {
        setRefreshing(true)
        setTimeout(() => {
            console.log('Terminado')
            setRefreshing(false)
            setData('Hola mundo')
        }, 3500)
    }

    return (
        <ScrollView
            // style={{ marginTop: refreshing ? top : 0}}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={top}
                    progressBackgroundColor='white'
                    colors={['black', 'red', 'orange']}
                    // style={{ backgroundColor: '#5856D6' }}
                    // tintColor='white'
                    // title='Refreshing'
                    // titleColor={'white'}
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title={'Pull to refresh'} />
                <HeaderTitle title={data} />
            </View>
        </ScrollView>
    )
}