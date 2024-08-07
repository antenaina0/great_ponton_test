import { DefaultTheme } from 'styled-components'

export const DEFAULT_THEME: DefaultTheme = {
    font: {
        family: {
            primary: 'Gilroy, sans-serif',
        },
        weight: {
            regular: 400,
            medium: 500,
            semi: 600,
            bold: 700,
        },
        size: {
            menuPicker: '13px',
            text: '15px',
            h4: '24px',
            h5: '17px',
            label: '11px',
        },
        lineHeight: {
            menuPicker: '20px',
            text: '22px',
            h4: '30px',
            h5: '24px',
            label: '14px',
        },
    },
    color: {
        primary: '#1688FE',
        black: '#000000',
        text: '#4C4C55',
        white: '#FFFFFF',
        green: '#008B5D',
        border: '#ECECED',
        inputBorder: '#E3E3E4',
        red: '#F25773',
        link: '#1688FE',
        checkboxBorder: '#C4C4C7',
        footerLink: '#595964',
    },
}
