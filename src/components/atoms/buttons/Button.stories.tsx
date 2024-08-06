import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { Button } from './Button'

const StoryContainer = styled.div`
    height: 506px;
    width: 392px;
`

const meta: Meta<typeof Button> = {
    component: Button,
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
type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        children: <>Save</>,
    },
}
