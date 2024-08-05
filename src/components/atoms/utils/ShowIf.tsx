import React from 'react'

export interface ShowProps {
    children?: React.ReactNode
    condition?: boolean
}

export const ShowIf: React.FC<ShowProps> = (props) => {
    return <>{props.condition && props.children}</>
}
