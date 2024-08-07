import { Text, TextLink } from '@components/atoms/typographies'
import React from 'react'
import styled from 'styled-components'

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props) => {
    return (
        <Container>
            <Text $weight="medium">
                <TextLink href="/contact" $weight="medium">
                    Get in touch with our support team
                </TextLink>{' '}
                if you have any question or want to leave some feedback. We’ll
                be happy to hear from you.
            </Text>
            <LinksWrapper>
                <Link href="/terms">Terms & Conditions</Link>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/contact">Contact Us</Link>
            </LinksWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`

const LinksWrapper = styled.div`
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
