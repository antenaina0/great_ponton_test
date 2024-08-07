import {
    AccountInNav,
    AccountInNavProps,
} from '@components/molecules/AccountInNav'
import { Logo, NavBar, NavBarSubList } from '@components/organisms/Sidebar'
import React from 'react'
import styled from 'styled-components'

export interface SidebarProps {
    sublists?: NavBarSubList[]
    account?: AccountInNavProps
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { sublists = [], account } = props
    return (
        <Container>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <NavBarWrapper>
                <NavBar subLists={sublists} />
            </NavBarWrapper>
            <AccountInNav {...account} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    min-width: 240px;
    border-right: 1px solid ${({ theme }) => theme.color.border};
    height: 100%;
`

const LogoWrapper = styled.div`
    height: 48px;
    padding-left: 8px;
    display: flex;
    align-items: center;
`
const NavBarWrapper = styled.div`
    border-top: 1px solid ${({ theme }) => theme.color.border};
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
    padding: 8px 4px;
    overflow-y: auto;
`
