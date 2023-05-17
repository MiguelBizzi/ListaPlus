import React from 'react'

import { EmptyText } from './styles'

interface Props {
    text: string
}

const EmptyFlatlistText: React.FC<Props> = ({ text }) => {
    return <EmptyText>{text}</EmptyText>
}

export default EmptyFlatlistText
