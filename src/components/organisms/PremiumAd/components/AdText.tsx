import { Body } from '@components/atoms/typographies/Body/Body'
import { H4 } from '@components/atoms/typographies/H4/H4'
import React from 'react'
import styled, { useTheme } from 'styled-components'

export interface AdTextProps {}

export const AdText: React.FC<AdTextProps> = (props) => {
    const theme = useTheme()
    return (
        <Container>
            <H4 $color={theme.color.white}>Premium Account</H4>
            <Body $color={theme.color.white} $weight={theme.font.weight.medium}>
                You have a premium account, granting you access to all the
                remarkable features offered by ResumeDone. With this privilege,
                you can indulge in the freedom of downloading an unlimited
                number of resumes and cover letters in both PDF and Word
                formats.
            </Body>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
`
