import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { Sidebar } from './Sidebar'

const StoryContainer = styled.div`
    height: 506px;
    width: 392px;
`

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
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
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
    args: {},
}
