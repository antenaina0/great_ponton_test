import { ASSETS } from '@constants/assets'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

export interface BagLogoProps {}

export const BagLogo: React.FC<BagLogoProps> = (props) => {
    return (
        <Container>
            <Image
                src={ASSETS.logo.bag}
                alt="Bag logo"
                width={48}
                height={48}
            />
        </Container>
    )
}

const Container = styled.div`
    width: 72px;
    height: 72px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
