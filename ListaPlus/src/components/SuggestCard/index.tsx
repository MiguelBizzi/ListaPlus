import React from 'react'
import { Image, View } from 'react-native'

import {
    Container,
    Circle,
    PlusButton,
    PlusIcon,
    Label,
    AlimentoImage,
} from './styles'

interface Props {
    item: any
    onPress: (item: any) => void
}

const SuggestCard: React.FC<Props> = ({ item, onPress }) => {
    function handleOnPress() {
        onPress(item)
    }

    return (
        <Container>
            <Circle onPress={handleOnPress} activeOpacity={0.7}>
                <PlusButton>
                    <PlusIcon name="plus-circle" />
                </PlusButton>
                {item?.imagem && (
                    <AlimentoImage source={{ uri: item.imagem }} />
                )}
            </Circle>
            <Label>{item?.nome}</Label>
        </Container>
    )
}

export default SuggestCard
