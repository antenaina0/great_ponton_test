import { FontWeight, Palette, Typography } from '@styling/theme'
import NextLink from 'next/link'
import styled from 'styled-components'

interface LinkProps {
    $weight?: FontWeight
    $typography?: Typography
    $color?: Palette
}

export const TextLink = styled(NextLink).attrs<LinkProps>((props) => ({
    $weight: props.$weight,
    $typography: props.$typography,
    $color: props.$color,
}))`
    text-decoration: none;

    font-family: ${({ theme }) => theme.font.family.primary};
    font-weight: ${({ theme, $weight = 'regular' }) =>
        theme.font.weight[$weight]};
    font-size: ${({ theme, $typography = 'text' }) =>
        theme.font.size[$typography]};
    color: ${({ theme, $color = 'link' }) => theme.color[$color]};
    line-height: ${({ theme, $typography = 'text' }) =>
        theme.font.lineHeight[$typography]};
    margin: 0;
    padding: 0;
`
