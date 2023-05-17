import MyNewList from '@components/MyNewList'
import React, { useState } from 'react'
import { FlatList, View } from 'react-native'

import {
    Container,
    Header,
    IconContainer,
    Icon,
    Info,
    Title,
    Date,
    Status,
    ButtonsGroup,
    Button,
    ButtonIcon,
    ListContainer,
} from './styles'
import MyNewListCard from '@components/MyNewList/MyNewListCard'
import { IList } from '@dtos/IList'
import moment from 'moment'

interface Props {
    list: IList
    handleCheck?: (id: any) => Promise<void>
    handleMark?: (
        id_lista: any,
        id_alimento: number,
        isMarked: boolean
    ) => Promise<void>
    handleDelete: (id: any) => Promise<void>
}

const ListCard: React.FC<Props> = ({
    list,
    handleCheck,
    handleMark,
    handleDelete,
}) => {
    const [showContent, setShowContent] = useState<boolean>(false)

    return (
        <Container>
            <Header
                onPress={() => setShowContent((prev) => !prev)}
                activeOpacity={0.7}
            >
                <IconContainer>
                    <Icon name="shopping-cart" />
                </IconContainer>
                <Info>
                    <View>
                        <Title>Lista {list.id}</Title>
                        <Date>
                            {moment(list.date)
                                .utcOffset('-03:00')
                                .format('DD/HH/YYYY HH:mm') + 'h'}
                        </Date>
                    </View>
                    <Status isFinished={list.status}>
                        {list.status ? 'Finalizada ' : 'Aberta'}
                    </Status>
                </Info>
                <ButtonsGroup>
                    {handleCheck && (
                        <Button
                            onPress={async () => await handleCheck(list.id)}
                            activeOpacity={0.7}
                        >
                            <ButtonIcon name="check" />
                        </Button>
                    )}
                    <Button
                        onPress={async () => await handleDelete(list.id)}
                        activeOpacity={0.7}
                    >
                        <ButtonIcon name="trash" />
                    </Button>
                </ButtonsGroup>
            </Header>
            <FlatList
                style={{ display: showContent ? 'flex' : 'none' }}
                data={list.alimentos}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <MyNewListCard
                        onPress={
                            handleMark
                                ? async (id, isMarked) => {
                                      await handleMark(list.id, id, isMarked)
                                  }
                                : undefined
                        }
                        item={item}
                    />
                )}
            />
        </Container>
    )
}

export default ListCard
