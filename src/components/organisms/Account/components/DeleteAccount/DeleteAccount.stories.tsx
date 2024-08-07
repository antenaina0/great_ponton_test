import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { DeleteAccount } from './DeleteAccount'

const StoryContainer = styled.div`
    height: 506px;
    width: 800px;
`

const meta: Meta<typeof DeleteAccount> = {
    component: DeleteAccount,
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
type Story = StoryObj<typeof DeleteAccount>

export const Default: Story = {
    args: {},
}
