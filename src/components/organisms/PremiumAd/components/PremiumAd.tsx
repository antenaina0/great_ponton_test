import React from 'react'
import styled from 'styled-components'
import { AdText } from './AdText'
import { BagLogo } from './BagLogo'

export interface PremiumAdProps {}

export const PremiumAd: React.FC<PremiumAdProps> = (props) => {
    return (
        <Container>
            <BagLogo />
            <AdText />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    background-color: ${({ theme }) => theme.color.green};
    border-radius: 8px;
    column-gap: 16px;
`
