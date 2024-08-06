import { Text, TextProps } from './Text'

interface H4Props extends TextProps {
    children?: React.ReactNode
    className?: string
}

export const H4: React.FC<H4Props> = (props) => {
    return (
        <Text
            $color="text"
            $typography="h4"
            $weight="semi"
            className={props.className}
        >
            {props.children}
        </Text>
    )
}
