import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'

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
    FooterInfo,
    CartCircle,
    CartIcon,
    FooterText,
    FooterButton,
    FooterButtonText,
    FooterButtonIcon,
} from './styles'

import alimentosJSON from '@services/alimentos.json'

import { useTheme } from 'styled-components/native'
import SuggestCard from '@components/SuggestCard'
import MyNewList from '@components/MyNewList'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { IAlimento } from '@dtos/IAlimento'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { useList } from '@hooks/list'
import { IList } from '@dtos/IList'
import moment from 'moment'

const CriaLista: React.FC = () => {
    const [selectedAlimento, setSelectedAlimento] = useState<any[]>([])
    const [search, setSearch] = useState('')
    const [filteredAlimentos, setFilteredAlimentos] =
        useState<any>(alimentosJSON)

    const theme = useTheme()
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    const { saveList } = useList()

    let isEnableToGoBack = false

    function handleGoBack() {
        if (selectedAlimento.length != 0 && !isEnableToGoBack) {
            Toast.show({
                type: 'info',
                text1: 'Salve a lista antes de voltar ou perderá sua lista!',
                text2: 'Para voltar clique novamente no botão de voltar',
            })

            isEnableToGoBack = true
            return
        }

        navigation.goBack()
    }

    function handleSearchTermChange(term: string) {
        setSearch(term)

        // Filtrar os alimentos com base no termo de pesquisa
        const filtered = alimentosJSON.filter((alimento) =>
            alimento.nome.toLowerCase().includes(term.toLowerCase())
        )

        setFilteredAlimentos(filtered)
    }

    function handleAddAlimentoToList(item: IAlimento) {
        const existingItem = selectedAlimento.find(
            (alimento) => alimento.id === item.id
        )

        if (existingItem) {
            const updatedAlimento = selectedAlimento.map((alimento) => {
                if (alimento.id === item.id) {
                    return {
                        ...alimento,
                        quantity: alimento.quantity + 1,
                    }
                }
                return alimento
            })

            setSelectedAlimento(updatedAlimento)
        } else {
            setSelectedAlimento((prev) => [
                ...prev,
                {
                    ...item,
                    quantity: 1,
                    isMarked: false,
                },
            ])
        }
    }

    function handleMarkAlimento(id: number, isMarked: boolean) {
        const updatedAlimento = selectedAlimento.map((alimento) => {
            if (alimento.id === id) {
                return {
                    ...alimento,
                    isMarked,
                }
            }
            return alimento
        })

        setSelectedAlimento(updatedAlimento)
    }

    async function handleSubmitList() {
        if (selectedAlimento.length == 0) {
            Toast.show({
                type: 'error',
                text1: 'Alerta!',
                text2: 'Adicione algum item na lista para salva-lá!',
            })

            return
        }

        let newList: IList = {
            id: moment(),
            status: false,
            alimentos: selectedAlimento,
        }

        saveList(newList).then((response) => {
            Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Lista criada com sucesso!',
            })
            navigation.goBack()
        })
    }

    return (
        <Container>
            <Header>
                <TopRow>
                    <BackButton onPress={handleGoBack} activeOpacity={0.6}>
                        <BackIcon name="arrow-left" />
                    </BackButton>
                    <Title>Minha lista:</Title>
                </TopRow>
                <SearchContainer>
                    <SearchIcon name="search" />
                    <SearchTextInput
                        placeholder="Pesquisar itens"
                        value={search}
                        onChangeText={handleSearchTermChange}
                        selectionColor={theme?.colors.primary_light}
                    />
                </SearchContainer>

                <SuggestContainer>
                    <SuggestTitle>Sugestões</SuggestTitle>
                    <FlatList
                        contentContainerStyle={{ alignItems: 'flex-start' }}
                        data={filteredAlimentos}
                        keyExtractor={(alimento) => alimento.id}
                        renderItem={({ item }) => (
                            <SuggestCard
                                item={item}
                                onPress={(item) =>
                                    handleAddAlimentoToList(item)
                                }
                            />
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ListEmptyComponent={
                            <Text style={{ color: theme?.colors.shape }}>
                                Nenhum produto igual a busca!
                            </Text>
                        }
                    />
                </SuggestContainer>
            </Header>
            <Main>
                <MyNewList
                    handleMark={(id, isMarked) =>
                        handleMarkAlimento(id, isMarked)
                    }
                    alimentos={selectedAlimento}
                />
            </Main>
            <Footer>
                <FooterInfo>
                    <CartCircle>
                        <CartIcon name="shopping-cart" />
                    </CartCircle>
                    <FooterText>
                        Total: {selectedAlimento.length} items
                    </FooterText>
                </FooterInfo>
                <FooterButton onPress={handleSubmitList} activeOpacity={0.6}>
                    <FooterButtonText>Finalizar lista</FooterButtonText>
                    <FooterButtonIcon name="check" />
                </FooterButton>
            </Footer>
        </Container>
    )
}

export default CriaLista
