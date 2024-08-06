import { Body } from '@components/atoms/typographies/Body/Body'
import { useTheme } from 'styled-components'

interface PickerTextProps {
    children?: React.ReactNode
    bold?: boolean
}

export const PickerText: React.FC<PickerTextProps> = ({ children, bold }) => {
    const { font } = useTheme()
    const { size, weight, lineHeight } = font

    return (
        <Body
            $size={size.menuPicker}
            $weight={bold ? weight.bold : weight.medium}
            $lineHeight={lineHeight.menuPicker}
        >
            {children}
        </Body>
    )
}
