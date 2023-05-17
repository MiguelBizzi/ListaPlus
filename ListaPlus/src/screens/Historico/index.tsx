import ListCard from '@components/ListCard'
import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'

import { Container, Header, CircleButton, Icon, Title } from './styles'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { IList } from '@dtos/IList'
import EmptyFlatlistText from '@components/EmptyFlatlistText'
import { useList } from '@hooks/list'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

const Historico: React.FC = () => {
    const { lists, deleteList } = useList()
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleGoBack() {
        navigation.goBack()
    }

    async function handleDeleteList(id: any) {
        await deleteList(id)
        Toast.show({
            type: 'success',
            text1: 'Lista excluida com sucesso!',
        })
    }

    return (
        <Container>
            <Header>
                <CircleButton onPress={handleGoBack} activeOpacity={0.7}>
                    <Icon name="arrow-left" />
                </CircleButton>
                <Title>Meu histórico de compras:</Title>
            </Header>
            <FlatList
                data={lists.filter((list: IList) => list.status)}
                keyExtractor={(item) => item?.id}
                renderItem={({ item }) => (
                    <ListCard
                        handleDelete={(id) => handleDeleteList(id)}
                        list={item}
                    />
                )}
                ListEmptyComponent={
                    <EmptyFlatlistText text="Nenhuma historico!" />
                }
            />
        </Container>
    )
}

export default Historico
