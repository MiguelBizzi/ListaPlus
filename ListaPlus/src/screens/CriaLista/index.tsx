import React from 'react'
import { ScrollView, View } from 'react-native'

import {
    Container,
    Header,
    TopRow,
    BackButton,
    BackIcon,
    Title,
    SearchContainer,
    SearchIcon,
    SearchTextInput,
    SuggestContainer,
    SuggestTitle,
    Main,
    Footer,
    CartCircle,
    CartIcon,
    FooterText,
} from './styles'
import { useTheme } from 'styled-components/native'
import SuggestCard from '@components/SuggestCard'
import MyNewList from '@components/MyNewList'

const CriaLista: React.FC = () => {
    const theme = useTheme()

    return (
        <Container>
            <Header>
                <TopRow>
                    <BackButton activeOpacity={0.6}>
                        <BackIcon name="arrow-left" />
                    </BackButton>
                    <Title>Minha lista:</Title>
                </TopRow>
                <SearchContainer>
                    <SearchIcon name="search" />
                    <SearchTextInput
                        placeholder="Pesquisar itens"
                        selectionColor={theme?.colors.primary_light}
                    />
                </SearchContainer>

                <SuggestContainer>
                    <SuggestTitle>Sugestões</SuggestTitle>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <SuggestCard />
                        <SuggestCard />
                        <SuggestCard />
                        <SuggestCard />
                        <SuggestCard />
                        <SuggestCard />
                    </ScrollView>
                </SuggestContainer>
            </Header>
            <Main>
                <MyNewList />
            </Main>
            <Footer>
                <CartCircle>
                    <CartIcon name="shopping-cart" />
                </CartCircle>
                <FooterText>Total: 9 items</FooterText>
            </Footer>
        </Container>
    )
}

export default CriaLista
