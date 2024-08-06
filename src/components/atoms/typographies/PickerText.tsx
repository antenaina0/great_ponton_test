import { Text } from '@components/atoms/typographies'

interface PickerTextProps {
    children?: React.ReactNode
    bold?: boolean
}

export const PickerText: React.FC<PickerTextProps> = ({ children, bold }) => {
    return (
        <Text $typography="menuPicker" $weight={bold ? 'bold' : 'medium'}>
            {children}
        </Text>
    )
}
