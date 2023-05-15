import React from 'react'
import { View } from 'react-native'

import { Label, InputGroup, InputComponent, IconButton, Icon } from './styles'
import { useTheme } from 'styled-components/native'

interface Props {
    label: string
    iconName: any
}

const Input: React.FC<Props> = ({ label, iconName }) => {
    const theme = useTheme()

    return (
        <>
            <Label>{label}</Label>
            <InputGroup>
                <InputComponent selectionColor={theme?.colors.primary_light} />
                <IconButton>
                    <Icon name={iconName} />
                </IconButton>
            </InputGroup>
        </>
    )
}

export default Input
