import React from 'react'
import styled from 'styled-components'
import { PickItem } from '../../interfaces/sidebar.interfaces'
import { SubList } from '../SubList/SubList'

export interface SidebarProps {
    templates?: PickItem[]
    suggestions?: PickItem[]
    boards?: PickItem[]
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

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { boards, suggestions, templates } = props
    return (
        <Container>
            <SubList header={TEMPLATE_HEADER} list={templates} />
            <SubList header={SEARCH_HEADER} list={suggestions} />
            <SubList header={BOARD_HEADER} list={boards} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 2px;
`
