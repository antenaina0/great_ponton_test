import { Text } from '@components/atoms/typographies'
import React from 'react'
import styled from 'styled-components'

export interface AdTextProps {}

export const AdText: React.FC<AdTextProps> = (props) => {
    return (
        <Container>
            <Text $color="white" $typography="h4" $weight="regular">
                Premium Account
            </Text>
            <Text $color="white" $weight="medium">
                You have a premium account, granting you access to all the
                remarkable features offered by ResumeDone. With this privilege,
                you can indulge in the freedom of downloading an unlimited
                number of resumes and cover letters in both PDF and Word
                formats.
            </Text>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
`
