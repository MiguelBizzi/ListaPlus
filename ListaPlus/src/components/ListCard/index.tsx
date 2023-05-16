import MyNewList from '@components/MyNewList'
import React, { useState } from 'react'
import { View } from 'react-native'

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

interface Props {
    isFinished?: boolean
}

const ListCard: React.FC<Props> = ({ isFinished = false }) => {
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
                        <Title>Lista 1</Title>
                        <Date>23/03/2023</Date>
                    </View>
                    <Status isFinished={isFinished}>
                        {isFinished ? 'Finalizada ' : 'Aberta'}
                    </Status>
                </Info>
                <ButtonsGroup>
                    <Button activeOpacity={0.7}>
                        <ButtonIcon name="check" />
                    </Button>
                    <Button activeOpacity={0.7}>
                        <ButtonIcon name="trash" />
                    </Button>
                </ButtonsGroup>
            </Header>
            <ListContainer style={{ display: showContent ? 'flex' : 'none' }}>
                <MyNewListCard />
                <MyNewListCard />
                <MyNewListCard />
                <MyNewListCard />
                <MyNewListCard />
            </ListContainer>
        </Container>
    )
}

export default ListCard
