import 'styled-components'

export type FontWeight = 'regular' | 'medium' | 'semi' | 'bold'

export type FontFamily = {
    primary: string
}

export type Typography = 'text' | 'menuPicker' | 'h4' | 'h5'

export type FontSize = Record<Typography, string>

export type LineHeight = Record<Typography, string>

export type Font = {
    family: FontFamily
    weight: Record<FontWeight, number>
    size: FontSize
    lineHeight: LineHeight
}

export type FontColor = 'primary' | 'text' | 'white' | 'green'

export type Color = Record<FontColor, string>

declare module 'styled-components' {
    export interface DefaultTheme {
        font: Font
        color: Color
    }
}
