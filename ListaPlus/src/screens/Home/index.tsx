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
    PorquinhoImage,
    FooterTitle,
    Description,
} from './styles'
import HomeButton from '@components/HomeButton'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { useAuth } from '@hooks/auth'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

const Home: React.FC = () => {
    const { navigate } = useNavigation<AppNavigatorRoutesProps>()
    const { user, signOut } = useAuth()

    function handleGoToNewList() {
        navigate('new_list')
    }

    function handleGoToOpenList() {
        navigate('open_list')
    }

    function handleGoToHistoric() {
        navigate('historic')
    }

    async function handleSignOut() {
        await signOut()
        Toast.show({
            type: 'success',
            text1: 'Sucesso!',
            text2: 'Deslogado com sucesso!',
        })
    }

    return (
        <Container>
            <Header>
                <CloseButton onPress={handleSignOut}>
                    <CloseIcon name="exit-to-app" />
                </CloseButton>
            </Header>
            <MainContent>
                <Title>Seja bem vindo, {user.nome}</Title>

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
                    <Circle>
                        {/* <PorquinhoSvg /> */}
                        <PorquinhoImage
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUeEnTc8SgR6ENPpYDpZUidBUN_Fy6uROfQIWwKeSYetvO75iW',
                            }}
                        />
                    </Circle>
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
