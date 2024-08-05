import 'styled-components'

declare module 'styled-components' {
    export interface Theme {
        font: {
            primary: string
            secondary?: string
        }
        weight: {
            regular: number
            medium: number
            semiBold: number
            bold: number
        }
    }
}
