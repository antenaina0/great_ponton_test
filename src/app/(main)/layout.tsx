'use client'
import { ACCOUNT, NAV_ITEMS } from '@app/(mocks)/navbar.mocks'
import { MainLayoutWrapper } from '@components/atoms/layout'
import { Sidebar } from '@components/organisms/Sidebar'
import React from 'react'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <MainLayoutWrapper>
            <Sidebar sublists={NAV_ITEMS} account={ACCOUNT} />
            {children}
        </MainLayoutWrapper>
    )
}
