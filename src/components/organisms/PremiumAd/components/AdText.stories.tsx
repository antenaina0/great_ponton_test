import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { AdText } from './AdText'

const StoryContainer = styled.div`
    height: 148px;
    width: 664px;
    background-color: ${({ theme }) => theme.color.green};
`

const meta: Meta<typeof AdText> = {
    component: AdText,
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
type Story = StoryObj<typeof AdText>

export const Default: Story = {
    args: {},
}
