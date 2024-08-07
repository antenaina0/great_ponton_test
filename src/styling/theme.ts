import 'styled-components'

export type FontWeight = 'regular' | 'medium' | 'semi' | 'bold'

export type FontFamily = {
    primary: string
}

export type Typography = 'text' | 'menuPicker' | 'h4' | 'h5' | 'label'

export type FontSize = Record<Typography, string>

export type LineHeight = Record<Typography, string>

export type Font = {
    family: FontFamily
    weight: Record<FontWeight, number>
    size: FontSize
    lineHeight: LineHeight
}

export type Palette =
    | 'primary'
    | 'text'
    | 'white'
    | 'green'
    | 'border'
    | 'inputBorder'
    | 'red'
    | 'link'
    | 'checkboxBorder'
    | 'black'
    | 'footerLink'

export type Color = Record<Palette, string>

declare module 'styled-components' {
    export interface DefaultTheme {
        font: Font
        color: Color
    }
}
