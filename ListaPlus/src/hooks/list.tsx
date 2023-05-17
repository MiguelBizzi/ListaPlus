import { IList } from '@dtos/IList'
import { storageGetLists, storageList } from '@storage/storageList'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface ListContextProps {
    lists: any
    saveList: (list: IList) => Promise<void>
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

    console.log(lists)

    return (
        <ListContext.Provider value={{ lists, saveList }}>
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
