import React from 'react'
import styled, { css } from 'styled-components'

export interface WrapperProps {
    rows?: number
    columns?: number
    rowGap?: string
    columnGap?: string
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export const Wrapper: React.FC<WrapperProps> = (props) => {
    const { children, columnGap, columns, rowGap, rows, className, style } =
        props
    return (
        <Container
            $columnGap={columnGap}
            $columns={columns}
            $rowGap={rowGap}
            $rows={rows}
            className={className}
            style={style}
        >
            {children}
        </Container>
    )
}

interface ContainerProps {
    $rows?: number
    $columns?: number
    $rowGap?: string
    $columnGap?: string
}

const Container = styled.div<ContainerProps>`
    display: grid;
    ${({ $columns }) =>
        $columns &&
        css`
            grid-template-columns: repeat(${$columns}, 1fr);
        `}
    ${({ $rows }) =>
        $rows
            ? css`
                  grid-template-rows: repeat(${$rows}, min-content());
              `
            : css`
                  grid-auto-rows: min-content;
              `}

    ${({ $rowGap }) =>
        $rowGap &&
        css`
            row-gap: ${$rowGap};
        `}
    ${({ $columnGap }) =>
        $columnGap &&
        css`
            column-gap: ${$columnGap};
        `}
`
