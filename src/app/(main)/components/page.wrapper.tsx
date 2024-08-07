'use client'

import { MainPageWrapper } from '@components/atoms/layout'
import { Account } from '@components/organisms/Account'

export default function PageWrapper() {
    return (
        <MainPageWrapper>
            <Account />
        </MainPageWrapper>
    )
}
