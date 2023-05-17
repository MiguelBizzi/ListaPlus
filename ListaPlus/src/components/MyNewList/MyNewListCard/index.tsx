import React, { useState } from 'react'
import { View } from 'react-native'

import { Container, Name, InfoGroup, Units, CheckBoxIcon, Line } from './styles'

interface Props {
    item: any
    onPress: (id: number, isMarked: boolean) => void
}

const MyNewListCard: React.FC<Props> = ({ item, onPress }) => {
    const [isMarked, setIsMarked] = useState<boolean>(item?.isMarked)

    function handleOnPress() {
        setIsMarked((prev) => !prev)
        onPress(item.id, !isMarked)
    }

    return (
        <Container onPress={handleOnPress} activeOpacity={0.7}>
            <Name>{item?.nome}</Name>
            <InfoGroup>
                <Units>{item?.quantity} Unidades</Units>
                <CheckBoxIcon name={!isMarked ? 'square' : 'check-square'} />
            </InfoGroup>
            {isMarked && <Line />}
        </Container>
    )
}

export default MyNewListCard
