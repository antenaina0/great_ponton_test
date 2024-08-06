import { PickerText } from '@components/atoms/typographies'
import { ASSETS } from '@constants/assets'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

export interface AccountInNavProps {
    avatar?: React.ReactNode
    username?: string
}

export const AccountInNav: React.FC<AccountInNavProps> = (props) => {
    return (
        <Container>
            <UserWrapper>
                <AvatarWrapper>{props.avatar}</AvatarWrapper>
                <PickerText>{props.username}</PickerText>
            </UserWrapper>
            <SettingIconWrapper>
                <Image
                    src={ASSETS.icons.gear}
                    alt="Gear icon indicating setting button"
                    width={16}
                    height={16}
                />
            </SettingIconWrapper>
        </Container>
    )
}

const Container = styled.div`
    height: 64px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const UserWrapper = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 12px;
    align-items: center;
`

const AvatarWrapper = styled.div`
    height: 32px;
    width: 32px;
    border-radius: 50%;
`

const SettingIconWrapper = styled.div`
    height: 32px;
    width: 32px;
    padding-right: 8px;
    display: flex;
    align-items: center;
`
