import styled from 'styled-components'

interface H4Props {
    $weight?: number
    $color?: string
    $size?: string
    $lineHeight?: string
}

export const H4 = styled.p<H4Props>`
    font-family: ${({ theme }) => theme.font.family.primary};
    font-weight: ${({ theme, $weight }) => $weight || theme.font.weight.semi};
    font-size: ${({ theme, $size }) => $size || theme.font.size.h4};
    color: ${({ theme, $color }) => $color || theme.color.text};
    line-height: ${({ theme, $lineHeight }) =>
        $lineHeight || theme.font.lineHeight.h4};
    margin: 0;
`
