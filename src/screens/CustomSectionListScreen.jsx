import React from 'react'
import { View, Text, SectionList } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator'
import { styles } from '../theme/appTheme'


const casas = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama",]
    }
]


export const CustomSectionListScreen = () => {

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>

            <SectionList
                sections={casas}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item, index) => item + index}
                stickySectionHeadersEnabled
                ListHeaderComponent={<HeaderTitle title={'Section List'} />}
                ListFooterComponent={() => (
                    <View style={{marginBottom: 100}}>
                        <HeaderTitle title={'Total de casas: ' + casas.length} />
                    </View>
                )}
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: 'white' }}>
                        <HeaderTitle title={section.casa} />
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <HeaderTitle title={'Total: ' + section.data.length} />
                )}
                // ItemSeparatorComponent={ItemSeparator}
                SectionSeparatorComponent={() => <ItemSeparator/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}