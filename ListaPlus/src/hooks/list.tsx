import { IAlimento } from '@dtos/IAlimento'
import { IList } from '@dtos/IList'
import {
    storageGetLists,
    storageList,
    storageLists,
} from '@storage/storageList'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface ListContextProps {
    lists: any
    saveList: (list: IList) => Promise<void>
    checkList: (id: any) => Promise<void>
    deleteList: (id: any) => Promise<void>
    markItem: (
        id_lista: any,
        id_alimento: number,
        isMarked: boolean
    ) => Promise<void>
}

type Props = {
    children?: React.ReactNode
}

const ListContext = createContext<ListContextProps>({} as ListContextProps)

const ListProvider: React.FC<Props> = ({ children }) => {
    const [lists, setLists] = useState<any>([])

    async function saveList(list: IList) {
        try {
            await storageList(list)
            setLists((old_list: IList[]) => [...old_list, list])
        } catch (error) {
            console.log(error)
        }
    }

    async function checkList(id: any) {
        try {
            const updatedLists = lists.map((list: IList) => {
                if (list.id === id) {
                    const updatedAlimentos = list.alimentos.map(
                        (alimento: IAlimento) => {
                            return { ...alimento, isMarked: true }
                        }
                    )

                    return {
                        ...list,
                        status: true,
                        alimentos: updatedAlimentos,
                    }
                }
                return list
            })

            setLists(updatedLists)
            await storageLists(updatedLists)
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteList(id: any) {
        try {
            const updatedLists = lists.filter((list: IList) => list.id !== id)

            setLists(updatedLists)
            await storageLists(updatedLists)
        } catch (error) {
            console.log(error)
        }
    }

    async function markItem(
        id_lista: any,
        id_alimento: number,
        isMarked: boolean
    ) {
        const updatedLists = lists.map((list: IList) => {
            if (id_lista === list.id) {
                const updatedAlimentos = list.alimentos.map(
                    (alimento: IAlimento) => {
                        if (id_alimento === alimento.id) {
                            return { ...alimento, isMarked }
                        }

                        return alimento
                    }
                )

                return { ...list, alimentos: updatedAlimentos }
            }

            return list
        })

        setLists(updatedLists)
        await storageLists(updatedLists)
    }

    async function loadListData() {
        try {
            const lists = await storageGetLists()

            setLists(lists)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadListData()
    }, [])

    return (
        <ListContext.Provider
            value={{ lists, saveList, checkList, deleteList, markItem }}
        >
            {children}
        </ListContext.Provider>
    )
}

function useList(): ListContextProps {
    const context = useContext(ListContext)

    if (!context) {
        throw new Error('useList must be used within an ListProvider')
    }

    return context as ListContextProps
}

export { ListProvider, useList }
