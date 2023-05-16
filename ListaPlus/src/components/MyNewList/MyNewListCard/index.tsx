import React, { useState } from 'react'
import { View } from 'react-native'

import { Container, Name, InfoGroup, Units, CheckBoxIcon, Line } from './styles'

const MyNewListCard: React.FC = () => {
    const [isMarked, setIsMarked] = useState<boolean>()

    return (
        <Container
            onPress={() => setIsMarked((prev) => !prev)}
            activeOpacity={0.7}
        >
            <Name>Banana</Name>
            <InfoGroup>
                <Units>3 Unidades</Units>
                <CheckBoxIcon name={!isMarked ? 'square' : 'check-square'} />
            </InfoGroup>
            {isMarked && <Line />}
        </Container>
    )
}

export default MyNewListCard
