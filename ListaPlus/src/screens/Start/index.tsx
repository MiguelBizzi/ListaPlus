import React from 'react'

import {
    Container,
    Content,
    Title,
    StartButton,
    StartButtonText,
    ImageContainer,
    ImageContainerTitle,
} from './styles'

const Start: React.FC = () => {
    return (
        <Container>
            <Content>
                <Title>LISTA+</Title>
                <StartButton activeOpacity={0.6}>
                    <StartButtonText>Começar</StartButtonText>
                </StartButton>
            </Content>
            <ImageContainer>
                <ImageContainerTitle>
                    Suas compras na palma da mão
                </ImageContainerTitle>
                {/* <Image /> */}
            </ImageContainer>
        </Container>
    )
}

export default Start
