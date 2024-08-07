import { TextLink } from '@components/atoms/typographies'
import React from 'react'
import styled from 'styled-components'

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props) => {
    return (
        <Container>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact Us</Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 32px;
    padding-top: 16px;
    border-top: 1px solid ${({ theme }) => theme.color.border};
`

const Link = styled(TextLink)`
    color: ${({ theme }) => theme.color.footerLink};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: 14px;
    line-height: 22px;
`
