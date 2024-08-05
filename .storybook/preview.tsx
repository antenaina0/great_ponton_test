import type { Preview } from '@storybook/react'

import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { ThemeProvider } from 'styled-components'
import { DEFAULT_THEME } from '../src/styling/default.theme'
import { GlobalStyles } from '../src/styling/global-styles'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [
        withThemeFromJSXProvider({
            themes: {
                default: DEFAULT_THEME,
            },
            defaultTheme: 'default',
            Provider: ThemeProvider,
            GlobalStyles,
        }),
    ],
}

export default preview
