import React, { useState } from 'react'
import { FlatList, ScrollView, View } from 'react-native'

import { Container, Header, Title, Icon } from './styles'
import MyNewListCard from './MyNewListCard'
import { RFValue } from 'react-native-responsive-fontsize'
import EmptyFlatlistText from '@components/EmptyFlatlistText'

interface Props {
    alimentos: any[]
    handleMark: (id: number, isMarked: boolean) => void
}

const MyNewList: React.FC<Props> = ({ alimentos, handleMark }) => {
    const [showContent, setShowContent] = useState<boolean>(true)

    return (
        <Container>
            <Header
                activeOpacity={0.7}
                onPress={() => setShowContent((prev) => !prev)}
            >
                <Title>Minha nova lista</Title>
                <Icon name={showContent ? 'arrow-down' : 'arrow-right'} />
            </Header>
            <FlatList
                style={{
                    display: showContent ? 'flex' : 'none',
                    marginBottom: RFValue(44),
                }}
                data={alimentos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <MyNewListCard onPress={handleMark} item={item} />
                )}
                ListEmptyComponent={<EmptyFlatlistText text="Lista vazia!" />}
            />
        </Container>
    )
}

export default MyNewList
