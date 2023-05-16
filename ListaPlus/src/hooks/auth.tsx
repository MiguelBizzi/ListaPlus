import { IUser } from '@dtos/IUser'
import {
    storageGetUsers,
    storageUserGet,
    storageUserRemove,
    storageUserSave,
    storageUsersData,
} from '@storage/storageUser'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

interface AuthContextProps {
    user: IUser
    isLoadingUserStorageData: boolean
    signIn: (authUser: IUser) => Promise<boolean | undefined>
    signOut: () => Promise<void>
    registerUser: (newUser: IUser) => Promise<boolean>
}

type Props = {
    children?: React.ReactNode
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<any>(null)
    const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
        useState(true)

    async function signIn(authUser: IUser) {
        try {
            let users = await storageGetUsers()

            if (!users) return false

            users.forEach(async (selected_user: IUser) => {
                if (
                    selected_user.email === authUser.email &&
                    selected_user.senha === authUser.senha
                ) {
                    setUser(selected_user)
                    await storageUserSave(selected_user)

                    Toast.show({
                        type: 'success',
                        text1: 'Sucesso!',
                        text2: 'Login feito com sucesso!',
                    })

                    return true
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function signOut() {
        try {
            setUser(null)
            await storageUserRemove()
        } catch (error) {
            console.log(error)
        }
    }

    async function registerUser(newUser: IUser) {
        try {
            await storageUsersData(newUser)

            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async function loadUserData() {
        try {
            setIsLoadingUserStorageData(true)

            const userLogged = await storageUserGet()

            if (Object.keys(userLogged).length == 0 || !userLogged) {
                setUser(null)
                return
            }

            setUser(userLogged)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoadingUserStorageData(false)
        }
    }

    useEffect(() => {
        loadUserData()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoadingUserStorageData,
                signIn,
                signOut,
                registerUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextProps {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context as AuthContextProps
}

export { AuthProvider, useAuth }
