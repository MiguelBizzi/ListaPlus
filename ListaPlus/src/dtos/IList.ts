import { IAlimento } from './IAlimento'

export interface IList {
    id: string
    status: boolean
    alimentos: IAlimento[]
}
