import React, { useRef, useState } from 'react'

import {
    Container,
    ImageContainer,
    CloseButton,
    CloseIcon,
    ScrollViewComponent,
    Content,
    Title,
    Button,
    ButtonText,
    Row,
    ForgotPasswordText,
    CadastrarText,
} from './styles'

import { ActivityIndicator, TouchableOpacity } from 'react-native'
import * as Yup from 'yup'
import Input from '@components/Input'
import { Form } from '@unform/mobile'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { useAuth } from '@hooks/auth'
import { IUser } from '@dtos/IUser'
import { useTheme } from 'styled-components/native'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

const Cadastro: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const formRef = useRef<any>(null)
    const theme = useTheme()
    const navigation = useNavigation<AuthNavigatorRoutesProps>()
    const { registerUser } = useAuth()

    async function handleSubmit(data: IUser) {
        try {
            setIsLoading(true)

            formRef.current.setErrors({})

            const schema = Yup.object().shape({
                nome: Yup.string().required('Nome é obrigatória'),
                email: Yup.string()
                    .email('Insira um email válido')
                    .required('E-mail é obrigatório'),
                senha: Yup.string().required('Senha é obrigatória'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            const response = await registerUser(data)

            if (response) {
                Toast.show({
                    type: 'success',
                    text1: 'Sucesso!',
                    text2: 'Usuario cadastrado!',
                })
                navigation.goBack()
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Error!',
                    text2: 'Não foi possivel cadastrar o usuario, tente novamente!',
                })
            }
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages: { [key: string]: string } = {}

                err.inner.forEach((error) => {
                    if (error.path) errorMessages[error.path] = error.message
                })

                formRef.current?.setErrors(errorMessages)
            }
        } finally {
            setIsLoading(false)
        }
    }

    function handleGoBack() {
        navigation.goBack()
    }

    function handleGoToLogin() {
        navigation.navigate('login')
    }

    return (
        <Container>
            <ImageContainer>
                <CloseButton onPress={handleGoBack}>
                    <CloseIcon name="arrow-left" />
                </CloseButton>
                {/* <Image /> */}
            </ImageContainer>

            <ScrollViewComponent>
                <Content>
                    <Title>Cadastro</Title>

                    <Form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        style={{ flex: 1, marginTop: RFValue(16) }}
                    >
                        <Input
                            name="nome"
                            label="Nome"
                            iconName="user"
                            autoCapitalize="words"
                            returnKeyType="next"
                            placeholder="Digite seu nome"
                            onSubmitEditing={() => {
                                formRef.current?.getFieldRef('email').focus()
                            }}
                        />

                        <Input
                            name="email"
                            label="E-mail"
                            iconName="mail"
                            keyboardType="email-address"
                            returnKeyType="next"
                            autoCapitalize="none"
                            placeholder="Digite seu e-mail"
                            onSubmitEditing={() => {
                                formRef.current?.getFieldRef('senha').focus()
                            }}
                        />

                        <Input
                            name="senha"
                            label="Senha"
                            iconName="eye"
                            isPassword
                            placeholder="Digite sua senha"
                            returnKeyType="done"
                            onSubmitEditing={() => {
                                formRef?.current?.submitForm()
                            }}
                        />
                    </Form>

                    <Button
                        disabled={isLoading}
                        activeOpacity={0.6}
                        onPress={() => formRef?.current?.submitForm()}
                    >
                        {isLoading ? (
                            <ActivityIndicator color={theme?.colors.shape} />
                        ) : (
                            <ButtonText>Cadastrar</ButtonText>
                        )}
                    </Button>

                    <Row>
                        <ForgotPasswordText>
                            Voce ja possui uma conta?
                        </ForgotPasswordText>
                        <TouchableOpacity
                            onPress={handleGoToLogin}
                            activeOpacity={0.4}
                        >
                            <CadastrarText>Entre</CadastrarText>
                        </TouchableOpacity>
                    </Row>
                </Content>
            </ScrollViewComponent>
        </Container>
    )
}

export default Cadastro
