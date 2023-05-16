import React from 'react'
import { View } from 'react-native'

import { Container, Circle, PlusButton, PlusIcon, Label } from './styles'

const SuggestCard: React.FC = () => {
    return (
        <Container>
            <Circle activeOpacity={0.7}>
                <PlusButton>
                    <PlusIcon name="plus-circle" />
                </PlusButton>
            </Circle>
            <Label>Banana</Label>
        </Container>
    )
}

export default SuggestCard
