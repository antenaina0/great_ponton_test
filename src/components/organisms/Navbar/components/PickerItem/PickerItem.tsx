import { ShowIf } from '@components/atoms/utils/ShowIf'
import { ASSETS } from '@constants/assets'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { PickerText } from './PickerText'
import { getIconAttributes, PickIcon } from './icon-attribute.utils'

export interface PickerItemProps {
    label?: string
    icon?: PickIcon
    important?: boolean
    add?: boolean
}

const MiniAdd = (
    <Image
        src={ASSETS.icons.miniAdd}
        alt="Cross inside circle icon indicating expandability of the menu"
        height={16}
        width={16}
    />
)

export const PickerItem: React.FC<PickerItemProps> = (props) => {
    const { label, icon = 'notes', important = false, add = false } = props
    const attributes = getIconAttributes(icon)
    return (
        <Container>
            <Wrapper>
                <Image height={16} width={16} {...attributes} />
                <PickerText bold={important}>{label}</PickerText>
            </Wrapper>
            <ShowIf condition={add}>
                <MiniAddWrapper>{MiniAdd}</MiniAddWrapper>
            </ShowIf>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 32px;
    padding: 0 12px 0 4px;
    display: flex;
    flex-direction: row;
    row-gap: 4px;
    justify-content: space-between;
    align-items: center;
`

const Wrapper = styled.div`
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: row;
    column-gap: 6px;
    align-items: center;
`
const MiniAddWrapper = styled.div`
    width: fit-content;
    height: 16px;
    cursor: pointer;
`
