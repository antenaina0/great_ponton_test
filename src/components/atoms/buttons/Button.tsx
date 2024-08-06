import styled from 'styled-components'

export const Button = styled.button`
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.text};
    font-weight: ${({ theme }) => theme.font.weight.semi};
    line-height: ${({ theme }) => theme.font.lineHeight.text};
    height: 40px;
    min-width: 170px;
    width: fit-content;
    transition-duration: 300ms;

    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }
`
