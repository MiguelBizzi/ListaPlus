import React from 'react'
import { View } from 'react-native'

import {
    Container,
    Header,
    CloseButton,
    CloseIcon,
    MainContent,
    Title,
    ButtonsContainer,
    Footer,
    FooterHeader,
    Circle,
    FooterTitle,
    Description,
} from './styles'
import HomeButton from '@components/HomeButton'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

const Home: React.FC = () => {
    const { navigate } = useNavigation<AppNavigatorRoutesProps>()

    function handleGoToNewList() {
        navigate('new_list')
    }

    function handleGoToOpenList() {
        navigate('open_list')
    }

    function handleGoToHistoric() {
        navigate('historic')
    }

    return (
        <Container>
            <Header>
                <CloseButton>
                    <CloseIcon name="exit-to-app" />
                </CloseButton>
            </Header>
            <MainContent>
                <Title>Seja bem vindo, nome</Title>

                <ButtonsContainer>
                    <HomeButton
                        onPress={handleGoToNewList}
                        iconName="plus-circle"
                        title="Criar minha lista de compras"
                    />
                    <HomeButton
                        onPress={handleGoToOpenList}
                        iconName="shopping-bag"
                        title="Listas de compras existentes"
                    />
                    <HomeButton
                        onPress={handleGoToHistoric}
                        iconName="heart"
                        title="Meu historico de compras"
                    />
                </ButtonsContainer>
            </MainContent>
            <Footer>
                <FooterHeader>
                    <Circle />
                    <FooterTitle>Voce sabia?</FooterTitle>
                </FooterHeader>
                <Description>
                    O aplicativo Lista+ ajuda você a economizar tempo na hora
                    das compras, permitindo que você organize suas listas de
                    maneira rápida e fácil.
                </Description>
            </Footer>
        </Container>
    )
}

export default Home
