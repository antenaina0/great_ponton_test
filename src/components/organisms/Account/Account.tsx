import { CheckBox } from '@components/atoms/inputs'
import { Text, TextLink } from '@components/atoms/typographies'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { DeleteAccount } from './components/DeleteAccount/DeleteAccount'
import { Footer } from './components/Footer/Footer'
import { PersonalInfoForm } from './components/PersonalInfoForm'
import { PersonalInfo } from './components/PersonalInfoForm/schemas/personal-info.schema'
import { PremiumAd } from './components/PremiumAd'

export interface AccountProps {
    onDelete?: () => void
    onSubmit?: (data: PersonalInfo) => void
    defaultValues?: PersonalInfo
    avatarUrl?: string
}

export const Account: React.FC<AccountProps> = (props) => {
    const [showProfile, setShowProfile] = useState<boolean>(false)

    const onCheckShowProfile = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setShowProfile(event.target.checked)
        },
        [],
    )

    return (
        <Container>
            <PremiumAd />
            <FormAndAvatarWrapper>
                <Form
                    defaultValues={props.defaultValues}
                    onSubmit={props.onSubmit}
                />
                <AvatarWrapper>
                    <Image
                        src={props.avatarUrl || ''}
                        alt="Petter avatar"
                        width={144}
                        height={144}
                    />
                </AvatarWrapper>
            </FormAndAvatarWrapper>

            <ShowProfile>
                <CheckBox checked={showProfile} onChange={onCheckShowProfile} />
                <Text>
                    Show my profile to serious employers on{' '}
                    <TextLink $color="link" href="https://hirethesbest.io">
                        hirethesbest.io
                    </TextLink>{' '}
                    for free
                </Text>
            </ShowProfile>
            <DeleteAccount onDelete={props.onDelete} />
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

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        align-items: center;
        row-gap: 32px;
    }
`
const AvatarWrapper = styled.div`
    height: 144px;
    width: 144px;
    border-radius: 50%;
    margin-top: 46px;

    @media (max-width: 1024px) {
        margin-top: 0;
    }
`
