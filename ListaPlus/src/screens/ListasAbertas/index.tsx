import ListCard from '@components/ListCard'
import React from 'react'
import { ScrollView, View } from 'react-native'

import { Container, Header, CircleButton, Icon, Title } from './styles'

const ListasAbertas: React.FC = () => {
    return (
        <Container>
            <Header>
                <CircleButton activeOpacity={0.7}>
                    <Icon name="arrow-left" />
                </CircleButton>
                <Title>Minhas listas de compras abertas:</Title>
            </Header>
            <ScrollView>
                <ListCard />
                <ListCard />
                <ListCard />
            </ScrollView>
        </Container>
    )
}

export default ListasAbertas
