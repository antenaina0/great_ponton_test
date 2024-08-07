import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { Account } from './Account'

const StoryContainer = styled.div`
    height: 506px;
    width: 800px;
`

const meta: Meta<typeof Account> = {
    component: Account,
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
type Story = StoryObj<typeof Account>

export const Default: Story = {
    args: {},
}
