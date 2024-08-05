import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { BagLogo } from './BagLogo'

const StoryContainer = styled.div`
    height: 100px;
    width: 100px;
    background-color: ${({ theme }) => theme.color.green};
    padding: 14px;
`

const meta: Meta<typeof BagLogo> = {
    component: BagLogo,
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
type Story = StoryObj<typeof BagLogo>

export const Default: Story = {
    args: {},
}
