'use client'

import { MainPageWrapper } from '@components/atoms/layout'
import { Account } from '@components/organisms/Account'
import { PersonalInfo } from '@components/organisms/Account/components/PersonalInfoForm/schemas/personal-info.schema'

export const PERSONAL_INFO_DEFAULT: PersonalInfo = {
    address: '123 Example',
    city: 'London',
    email: 'petter@gmail.com',
    firstName: 'Petter',
    lastName: 'Cetera',
    password: 'Password',
    phone: '+442223334444',
    postalCode: 'E2 4XF',
}

export default function PageWrapper() {
    return (
        <MainPageWrapper>
            <Account
                avatarUrl="/mock-cdn/petter-avatar.png"
                defaultValues={PERSONAL_INFO_DEFAULT}
                onDelete={() => {
                    console.log('delete this account')
                }}
                onSubmit={(data) => {
                    console.log(data)
                }}
            />
        </MainPageWrapper>
    )
}
