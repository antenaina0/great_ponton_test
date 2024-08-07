import React from 'react'
import styled from 'styled-components'

export interface CheckBoxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
    const { type, ...rest } = props
    return (
        <Label>
            <Input type="checkbox" {...rest} />
            <Border $checked={rest.checked}>
                <CheckMark $checked={rest.checked} />
            </Border>
        </Label>
    )
}

const Label = styled.label`
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    cursor: pointer;
`

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
    background-color: ${({ theme, $checked }) =>
        $checked ? theme.color.primary : theme.color.white};
    border-radius: 4px;
    cursor: pointer;
    transition-duration: 300ms;

    &:hover {
        filter: brightness(105%);
    }

    input:checked ~ div {
    }
`

const CheckMark = styled.div<{ $checked?: boolean }>`
    transition-duration: 300ms;
    width: 100%;
    height: 100%;
`
