import React, { useState } from 'react'
import { View } from 'react-native'

import { Container, Name, InfoGroup, Units, CheckBoxIcon, Line } from './styles'

interface Props {
    item: any
    onPress?: (id: number, isMarked: boolean) => Promise<void>
}

const MyNewListCard: React.FC<Props> = ({ item, onPress }) => {
    const [isMarked, setIsMarked] = useState<boolean>(item?.isMarked)

    async function handleOnPress() {
        if (onPress) {
            setIsMarked((prev) => !prev)
            await onPress(item.id, !isMarked)
        }
    }

    return (
        <Container
            disabled={!onPress}
            onPress={handleOnPress}
            activeOpacity={0.7}
        >
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
