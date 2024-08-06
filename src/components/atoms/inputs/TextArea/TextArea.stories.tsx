import { ASSETS } from '@constants/assets'
import { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'
import styled from 'styled-components'
import { TextArea } from './TextArea'

const StoryContainer = styled.div`
    height: 506px;
    width: 392px;
`

const meta: Meta<typeof TextArea> = {
    component: TextArea,
    decorators: [
        (Story) => {
            return (
                <StoryContainer>
                    <Story />
                </StoryContainer>
            )
        },
    ],
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {
    args: {
        label: 'First Name',
    },
}

export const Error: Story = {
    args: {
        label: 'Email',
        value: 'wrong-stuff',
        error: 'Invalid email address',
    },
}

const PostFixElement = (
    <Image
        src={ASSETS.icons.checkBadge}
        alt="Check icon meaning correctness of input"
        width={16}
        height={16}
    />
)

export const WithPostFixElement: Story = {
    args: {
        label: 'Email',
        value: 'petter@gmail.com',
        postfixElement: PostFixElement,
    },
}
