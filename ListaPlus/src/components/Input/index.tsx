import React, { useCallback, useEffect, useRef, useState } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

import {
    Label,
    InputGroup,
    InputComponent,
    IconButton,
    Icon,
    Error,
} from './styles'

import { useTheme } from 'styled-components/native'
import { useField } from '@unform/core'
import { RFValue } from 'react-native-responsive-fontsize'

interface InputProps extends TextInputProps {
    iconName: any
    name: string
    label: string
    isPassword?: boolean
}

interface InputReference extends TextInput {
    value: string
}

export default function Input({
    iconName,
    name,
    label,
    onChangeText,
    isPassword,
    ...rest
}: InputProps) {
    const [showContent, setShowContent] = useState<boolean>(false)

    const theme = useTheme()
    const inputRef = useRef<InputReference>(null)

    const { fieldName, registerField, defaultValue, error, clearError } =
        useField(name)

    useEffect(() => {
        if (inputRef?.current) inputRef.current.value = defaultValue
    }, [defaultValue])

    useEffect(() => {
        if (inputRef.current) inputRef.current.value = defaultValue
    }, [defaultValue])

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            getValue() {
                if (inputRef.current) return inputRef.current.value
                return ''
            },
            setValue(ref, value) {
                if (inputRef.current) {
                    inputRef.current.setNativeProps({ text: value })
                    inputRef.current.value = value
                }
            },
            clearValue() {
                if (inputRef.current) {
                    inputRef.current.setNativeProps({ text: '' })
                    inputRef.current.value = ''
                }
            },
        })
    }, [fieldName, registerField])

    const handleChangeText = useCallback(
        (text: any) => {
            if (inputRef.current) inputRef.current.value = text
            if (onChangeText) onChangeText(text)
        },
        [onChangeText]
    )

    return (
        <>
            <Label>{label}</Label>
            <InputGroup
                error={!!error}
                style={{ marginBottom: !error ? RFValue(16) : 0 }}
            >
                <InputComponent
                    ref={inputRef}
                    onChangeText={handleChangeText}
                    defaultValue={defaultValue}
                    onFocus={clearError}
                    selectionColor={theme?.colors.primary_light}
                    secureTextEntry={isPassword ? !showContent : false}
                    {...rest}
                />
                <IconButton
                    disabled={!isPassword}
                    onPress={() => {
                        if (isPassword) {
                            setShowContent((prev) => !prev)
                        }
                    }}
                >
                    <Icon
                        error={!!error}
                        name={
                            isPassword
                                ? showContent
                                    ? 'eye'
                                    : 'eye-off'
                                : iconName
                        }
                    />
                </IconButton>
            </InputGroup>
            {error && <Error>{error}</Error>}
        </>
    )
}
