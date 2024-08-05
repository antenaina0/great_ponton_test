import styled from 'styled-components'

interface BodyProps {
    $weight?: number
    $color?: string
    $size?: string
    $lineHeight?: string
}

export const Body = styled.p<BodyProps>`
    font-family: ${({ theme }) => theme.font.family.primary};
    font-weight: ${({ theme, $weight }) =>
        $weight || theme.font.weight.regular};
    font-size: ${({ theme, $size }) => $size || theme.font.size.text};
    color: ${({ theme, $color }) => $color || theme.color.text};
    line-height: ${({ theme, $lineHeight }) =>
        $lineHeight || theme.font.lineHeight.text};
`
