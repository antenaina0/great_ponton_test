import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { PremiumAd } from './PremiumAd'

const StoryContainer = styled.div`
    height: 506px;
    width: 800px;
`

const meta: Meta<typeof PremiumAd> = {
    component: PremiumAd,
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
type Story = StoryObj<typeof PremiumAd>

export const Default: Story = {
    args: {},
}
