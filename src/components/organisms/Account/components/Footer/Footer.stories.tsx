import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { Footer } from './Footer'

const StoryContainer = styled.div`
    height: 506px;
    width: 392px;
`

const meta: Meta<typeof Footer> = {
    component: Footer,
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
type Story = StoryObj<typeof Footer>

export const Default: Story = {
    args: {},
}
