import { FontWeight, Palette, Typography } from '@styling/theme'
import styled from 'styled-components'

export interface TextProps {
    $weight?: FontWeight
    $typography?: Typography
    $color?: Palette
}

export const Text = styled.p<TextProps>`
    font-family: ${({ theme }) => theme.font.family.primary};
    font-weight: ${({ theme, $weight = 'regular' }) =>
        theme.font.weight[$weight]};
    font-size: ${({ theme, $typography = 'text' }) =>
        theme.font.size[$typography]};
    color: ${({ theme, $color = 'text' }) => theme.color[$color]};
    line-height: ${({ theme, $typography = 'text' }) =>
        theme.font.lineHeight[$typography]};
    margin: 0;
    padding: 0;
`
