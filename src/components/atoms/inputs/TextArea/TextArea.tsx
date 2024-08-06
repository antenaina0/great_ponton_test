import { ShowIf } from '@components/atoms/utils/ShowIf'
import React from 'react'
import styled, { css } from 'styled-components'

export interface TextAreaProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    postfixElement?: React.ReactNode
    error?: string
}

export const TextArea: React.FC<TextAreaProps> = (props) => {
    const { label, className, postfixElement, error, ...rest } = props
    const { name } = rest

    return (
        <Container className={className}>
            <InputBorder $error={!!error}>
                <InnerInput {...rest} />
                {postfixElement}
            </InputBorder>
            <Label $error={!!error} htmlFor={name}>
                {label}
            </Label>
            <ShowIf condition={!!error}>
                <ErrorMessage>{error}</ErrorMessage>
            </ShowIf>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    padding-top: 8px;
    z-index: 1;
`

const commonAnimation = css`
    transition-duration: 300ms;
`

interface InputBorderProps {
    $error?: boolean
}

const InputBorder = styled.div<InputBorderProps>`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    row-gap: 12px;
    align-items: center;
    height: 48px;
    border: 1px solid
        ${({ theme, $error }) =>
            $error ? theme.color.red : theme.color.inputBorder};
    border-radius: 4px;
    padding: 0 12px 0 12px;
    ${commonAnimation}

    &:focus-within {
        border: 1px solid
            ${({ theme, $error }) =>
                $error ? theme.color.red : theme.color.primary};
    }

    &:focus-within ~ label {
        color: ${({ theme, $error }) =>
            $error ? theme.color.red : theme.color.primary};
    }
`

const InnerInput = styled.input`
    z-index: 0;
    flex-grow: 1;
    border: none;
    padding: 0;
    height: 22px;
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.font.size.text};

    &:focus-visible {
        outline: none;
    }
`

interface InputLabelProps {
    $error?: boolean
}

const Label = styled.label<InputLabelProps>`
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.label};
    line-height: ${({ theme }) => theme.font.lineHeight.label};
    font-weight: ${({ theme }) => theme.font.weight.semi};
    color: ${({ theme, $error }) =>
        $error ? theme.color.red : theme.color.text};
    position: absolute;
    background: white;
    top: 1px;
    left: 8px;
    z-index: 2;
    height: 14px;
    padding: 0 4px 0 4px;
    ${commonAnimation}
`

const ErrorMessage = styled.p`
    padding: 4px 8px;
    margin: 0;
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.label};
    line-height: ${({ theme }) => theme.font.lineHeight.label};
    font-weight: ${({ theme }) => theme.font.weight.semi};
    color: ${({ theme }) => theme.color.red};
`
