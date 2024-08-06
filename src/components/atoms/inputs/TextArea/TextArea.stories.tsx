import { Meta, StoryObj } from '@storybook/react'
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
