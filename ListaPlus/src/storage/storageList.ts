import { IList } from '@dtos/IList'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ID_COUNTER, LISTS_STORAGE } from './storageConfig'

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

export async function storageLists(lists: IList[]) {
    try {
        await AsyncStorage.setItem(LISTS_STORAGE, JSON.stringify(lists))
    } catch (error) {
        console.log('Erro ao salvar as listas no AsyncStorage:', error)
    }
}

export async function storageGetNextId() {
    try {
        const currentId = await AsyncStorage.getItem(ID_COUNTER)

        if (currentId !== null) {
            const nextId = parseInt(currentId) + 1

            await AsyncStorage.setItem(ID_COUNTER, nextId.toString())

            return nextId
        } else {
            await AsyncStorage.setItem(ID_COUNTER, '1')

            return 1
        }
    } catch (error) {
        console.log('Erro ao obter ou atualizar o contador do ID:', error)
    }
}

export async function storageGetLists() {
    const storage = await AsyncStorage.getItem(LISTS_STORAGE)

    const lists = storage ? JSON.parse(storage) : []

    return lists
}
