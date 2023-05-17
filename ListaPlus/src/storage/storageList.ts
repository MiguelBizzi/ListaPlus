import { IList } from '@dtos/IList'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LISTS_STORAGE } from './storageConfig'

export async function storageList(list: IList) {
    try {
        // Recupere o array atual do AsyncStorage
        const arrayAtual = await AsyncStorage.getItem(LISTS_STORAGE)

        let newArray = []

        if (arrayAtual) {
            newArray = JSON.parse(arrayAtual)
        }

        // Adicione o novo objeto ao array
        newArray.push(list)

        // Armazene o novo array atualizado no AsyncStorage
        await AsyncStorage.setItem(LISTS_STORAGE, JSON.stringify(newArray))
    } catch (error) {
        console.log('Erro ao adicionar a lista:', error)
    }
}

export async function storageGetLists() {
    const storage = await AsyncStorage.getItem(LISTS_STORAGE)

    const lists = storage ? JSON.parse(storage) : []

    return lists
}
