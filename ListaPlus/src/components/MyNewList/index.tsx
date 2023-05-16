import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'

import { Container, Header, Title, Icon } from './styles'
import MyNewListCard from './MyNewListCard'
import { RFValue } from 'react-native-responsive-fontsize'

const MyNewList: React.FC = () => {
    const [showContent, setShowContent] = useState<boolean>(true)

    return (
        <Container>
            <Header
                activeOpacity={0.7}
                onPress={() => setShowContent((prev) => !prev)}
            >
                <Title>Minha lista</Title>
                <Icon name={showContent ? 'arrow-down' : 'arrow-right'} />
            </Header>
            <View
                style={{
                    display: showContent ? 'flex' : 'none',
                    marginBottom: RFValue(44),
                }}
            >
                <MyNewListCard />
                <MyNewListCard />
                <MyNewListCard />
                <MyNewListCard />
                <MyNewListCard />
                <MyNewListCard />
                <MyNewListCard />
            </View>
        </Container>
    )
}

export default MyNewList
