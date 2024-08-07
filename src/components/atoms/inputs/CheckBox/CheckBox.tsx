import React from 'react'
import styled from 'styled-components'

export interface CheckBoxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
    const { type, ...rest } = props
    return (
        <Border $checked={rest.checked}>
            <Input type="checkbox" {...rest} />
            <CheckMark />
        </Border>
    )
}

const Input = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`

const Border = styled.div<{ $checked?: boolean }>`
    position: relative;
    width: 16px;
    height: 16px;
    border: 2px solid
        ${({ theme, $checked }) =>
            $checked ? theme.color.primary : theme.color.checkboxBorder};
    border-radius: 4px;
    cursor: pointer;
    transition-duration: 300ms;

    &:hover {
        filter: brightness(105%);
    }

    input:checked ~ div {
        background-color: ${({ theme }) => theme.color.primary};
    }
`

const CheckMark = styled.div`
    transition-duration: 300ms;
    width: 100%;
    height: 100%;
`
