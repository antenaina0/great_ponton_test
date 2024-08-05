import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { Body } from './Body'

const StoryContainer = styled.div`
    height: 506px;
    width: 392px;
`

const meta: Meta<typeof Body> = {
    component: Body,
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
type Story = StoryObj<typeof Body>

export const Default: Story = {
    args: {
        children: 'example text',
    },
}
