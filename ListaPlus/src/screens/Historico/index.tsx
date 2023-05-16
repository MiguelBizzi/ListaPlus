import ListCard from '@components/ListCard'
import React from 'react'
import { ScrollView, View } from 'react-native'

import { Container, Header, CircleButton, Icon, Title } from './styles'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

const Historico: React.FC = () => {
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <Container>
            <Header>
                <CircleButton onPress={handleGoBack} activeOpacity={0.7}>
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
