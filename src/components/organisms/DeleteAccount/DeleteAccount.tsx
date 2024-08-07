import { Text } from '@components/atoms/typographies'
import React from 'react'
import styled from 'styled-components'

export interface DeleteAccountProps {
    onDelete?: () => void
}

export const DeleteAccount: React.FC<DeleteAccountProps> = (props) => {
    return (
        <Container>
            <MessageWrapper>
                <Text $typography="h5" $color="black" $weight="semi">
                    Delete account
                </Text>
                <Text $weight="medium">
                    If you delete your account you’ll be permanently removing it
                    from our systems - you can’t undo it.
                </Text>
            </MessageWrapper>
            <Delete
                $color="red"
                $weight="semi"
                onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    props.onDelete?.()
                }}
            >
                Yes, Delete my account
            </Delete>
        </Container>
    )
}

const Container = styled.div`
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.border};
    padding: 16px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`

const MessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`

const Delete = styled(Text)`
    cursor: pointer;
    user-select: none;
    width: fit-content;
`
