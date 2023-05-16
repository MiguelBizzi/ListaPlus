import ListCard from '@components/ListCard'
import React from 'react'
import { ScrollView, View } from 'react-native'

import { Container, Header, CircleButton, Icon, Title } from './styles'

const Historico: React.FC = () => {
    return (
        <Container>
            <Header>
                <CircleButton activeOpacity={0.7}>
                    <Icon name="arrow-left" />
                </CircleButton>
                <Title>Meu histórico de compras:</Title>
            </Header>
            <ScrollView>
                <ListCard isFinished />
                <ListCard isFinished />
                <ListCard isFinished />
            </ScrollView>
        </Container>
    )
}

export default Historico
