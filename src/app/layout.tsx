'use client'
import { DEFAULT_THEME } from '@styling/default.theme'
import StyledComponentsRegistry from '@styling/registry'
import { ThemeProvider } from 'styled-components'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <ThemeProvider theme={DEFAULT_THEME}>
                        {children}
                    </ThemeProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
