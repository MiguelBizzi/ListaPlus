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

const Home: React.FC = () => {
    return (
        <Container>
            <Header>
                <CloseButton>
                    <CloseIcon name="x" />
                </CloseButton>
            </Header>
            <MainContent>
                <Title>Seja bem vindo, nome</Title>

                <ButtonsContainer>
                    <HomeButton
                        iconName="plus-circle"
                        title="Criar minha lista de compras"
                    />
                    <HomeButton
                        iconName="shopping-bag"
                        title="Listas de compras existentes"
                    />
                    <HomeButton
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
