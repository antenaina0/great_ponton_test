import React from 'react'
import styled from 'styled-components'
import { NavBarSubList } from '../../interfaces/nav-bar.interfaces'
import { SubList } from '../SubList/SubList'

export interface SidebarProps {
    subLists?: NavBarSubList[]
}

export const NavBar: React.FC<SidebarProps> = (props) => {
    const { subLists = [] } = props
    return (
        <Container>
            {subLists.map((subList) => {
                return <SubList {...subList} key={subList.header.id} />
            })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 2px;
`
