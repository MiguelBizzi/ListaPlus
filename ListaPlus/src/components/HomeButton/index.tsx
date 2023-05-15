import React from 'react'
import { View } from 'react-native'

import { Container, Outline, Content, IconCircle, Icon, Title } from './styles'

interface Props {
    title: string
    iconName: any
}

const HomeButton: React.FC<Props> = ({ title, iconName }) => {
    return (
        <Container activeOpacity={0.7}>
            <Outline>
                <Content>
                    <IconCircle>
                        <Icon name={iconName} />
                    </IconCircle>
                    <Title>{title}</Title>
                </Content>
            </Outline>
        </Container>
    )
}

export default HomeButton
