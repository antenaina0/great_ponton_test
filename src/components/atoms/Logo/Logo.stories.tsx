import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { Logo } from './Logo'

const StoryContainer = styled.div`
    height: 50px;
    width: 120px;
`

const meta: Meta<typeof Logo> = {
    component: Logo,
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
type Story = StoryObj<typeof Logo>

export const Default: Story = {
    args: {},
}
