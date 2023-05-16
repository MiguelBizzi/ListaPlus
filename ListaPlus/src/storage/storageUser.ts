import AsyncStorage from '@react-native-async-storage/async-storage'
import { IUser } from '@dtos/IUser'
import { USERS_STORAGE, USER_STORAGE } from '@storage/storageConfig'

export async function storageUserSave(user: IUser) {
    // armazenando o usuario selecionado
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
}

export async function storageUsersData(user: IUser) {
    try {
        // Recupere o array atual do AsyncStorage
        const arrayAtual = await AsyncStorage.getItem(USERS_STORAGE)

        let newArray = []

        if (arrayAtual) {
            newArray = JSON.parse(arrayAtual)
        }

        // Adicione o novo objeto ao array
        newArray.push(user)

        // Armazene o novo array atualizado no AsyncStorage
        await AsyncStorage.setItem(USERS_STORAGE, JSON.stringify(newArray))

        console.log('Objeto adicionado com sucesso!')
    } catch (error) {
        console.log('Erro ao adicionar o objeto:', error)
    }
}

export async function storageUserGet() {
    const storage = await AsyncStorage.getItem(USER_STORAGE)

    const user: IUser = storage ? JSON.parse(storage) : {}

    return user
}

export async function storageGetUsers() {
    const storage = await AsyncStorage.getItem(USERS_STORAGE)

    const user = storage ? JSON.parse(storage) : {}

    return user
}

export async function storageUserRemove() {
    await AsyncStorage.removeItem(USER_STORAGE)
}
