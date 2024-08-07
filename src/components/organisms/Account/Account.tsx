import { CheckBox } from '@components/atoms/inputs'
import { Text } from '@components/atoms/typographies'
import Image from 'next/image'
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
            <FormAndAvatarWrapper>
                <Form />
                <AvatarWrapper>
                    <Image
                        src="/mock-cdn/petter-avatar.png"
                        alt="Petter avatar"
                        width={144}
                        height={144}
                    />
                </AvatarWrapper>
            </FormAndAvatarWrapper>

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

const Form = styled(PersonalInfoForm)`
    flex-grow: 1;
`

const FormAndAvatarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 16px;
    width: 100%;
    flex-grow: 1;
`
const AvatarWrapper = styled.div`
    height: 144px;
    width: 144px;
    border-radius: 50%;
    margin-top: 46px;
`
