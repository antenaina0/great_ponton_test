import { Text, TextProps } from './Text'

interface H4Props extends TextProps {
    children?: React.ReactNode
}

export const H4: React.FC<H4Props> = (props) => {
    return (
        <Text $color="white" $typography="h4" $weight="regular">
            {props.children}
        </Text>
    )
}
