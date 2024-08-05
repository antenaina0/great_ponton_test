import { createGlobalStyle } from 'styled-components'
import { fonts } from './fonts'

export const GlobalStyles = createGlobalStyle`
    ${fonts}

    * {
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        height: 100%;
    }
`
