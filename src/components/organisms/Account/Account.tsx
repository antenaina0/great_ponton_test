import { CheckBox } from '@components/atoms/inputs'
import { Text } from '@components/atoms/typographies'
import React from 'react'
import styled from 'styled-components'
import { DeleteAccount } from './components/DeleteAccount/DeleteAccount'
import { Footer } from './components/Footer/Footer'
import { PersonalInfoForm } from './components/PersonalInfoForm'
import { PremiumAd } from './components/PremiumAd'

export interface AccountProps {}

export const Account: React.FC<AccountProps> = (props) => {
    return (
        <Container>
            <PremiumAd />
            <PersonalInfoForm />
            <ShowProfile>
                <CheckBox />
                <Text>
                    Show my profile to serious employers on hirethesbest.io for
                    free
                </Text>
            </ShowProfile>
            <DeleteAccount />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 32px;
`

const ShowProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 8px;
`
