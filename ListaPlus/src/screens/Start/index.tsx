import React from 'react'

import {
    Container,
    Content,
    Title,
    StartButton,
    StartButtonText,
    ImageContainer,
    ImageContainerTitle,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { Image } from 'react-native'

const Start: React.FC = () => {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function handleGoToLogin() {
        navigation.navigate('login')
    }

    return (
        <Container>
            <Content>
                <Title>LISTA+</Title>
                <StartButton onPress={handleGoToLogin} activeOpacity={0.6}>
                    <StartButtonText>Começar</StartButtonText>
                </StartButton>
            </Content>
            <Image source={require('@assets/fundo.png')} style={{ flex: 1 }} />
            <ImageContainerTitle>
                Suas compras na palma da mão
            </ImageContainerTitle>
        </Container>
    )
}

export default Start
