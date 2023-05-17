import ListCard from '@components/ListCard'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, View } from 'react-native'

import { Container, Header, CircleButton, Icon, Title } from './styles'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { useList } from '@hooks/list'
import EmptyFlatlistText from '@components/EmptyFlatlistText'
import { IList } from '@dtos/IList'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

const ListasAbertas: React.FC = () => {
    const { lists, checkList, deleteList, markItem } = useList()

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleGoBack() {
        navigation.goBack()
    }

    async function handleCheckList(id: any) {
        await checkList(id)
        Toast.show({
            type: 'success',
            text1: 'Lista finalizada com sucesso!',
            text2: 'Vá para a pagina de historico para vê-la!',
        })
    }

    async function handleDeleteList(id: any) {
        await deleteList(id)
        Toast.show({
            type: 'success',
            text1: 'Lista excluida com sucesso!',
        })
    }

    async function handleMarkAlimento(
        id_lista: any,
        id_alimento: number,
        isMarked: boolean
    ) {
        await markItem(id_lista, id_alimento, isMarked)
    }

    return (
        <Container>
            <Header>
                <CircleButton onPress={handleGoBack} activeOpacity={0.7}>
                    <Icon name="arrow-left" />
                </CircleButton>
                <Title>Minhas listas de compras abertas:</Title>
            </Header>
            <FlatList
                data={lists.filter((list: IList) => !list.status)}
                keyExtractor={(item) => item?.id}
                renderItem={({ item }) => (
                    <ListCard
                        handleDelete={(id) => handleDeleteList(id)}
                        handleCheck={(id) => handleCheckList(id)}
                        handleMark={(id_lista, id_alimento, isMarked) =>
                            handleMarkAlimento(id_lista, id_alimento, isMarked)
                        }
                        list={item}
                    />
                )}
                ListEmptyComponent={
                    <EmptyFlatlistText text="Nenhuma lista aberta!" />
                }
            />
        </Container>
    )
}

export default ListasAbertas
