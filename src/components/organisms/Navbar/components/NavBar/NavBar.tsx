import React from 'react'
import styled from 'styled-components'
import { NavBarSubList, PickItem } from '../../interfaces/nav-bar.interfaces'
import { SubList } from '../SubList/SubList'

export interface SidebarProps {
    subLists?: NavBarSubList[]
}

const BOARD_HEADER: PickItem = {
    title: 'My boards',
    type: 'drawer',
    header: true,
    id: 'board1',
}

const SEARCH_HEADER: PickItem = {
    title: 'Search',
    type: 'search',
    header: true,
    id: 'search1',
}
const TEMPLATE_HEADER: PickItem = {
    title: 'My templates',
    type: 'template',
    header: true,
    id: 'template1',
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
