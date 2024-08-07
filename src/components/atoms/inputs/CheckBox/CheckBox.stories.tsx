import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { CheckBox } from './CheckBox'

const StoryContainer = styled.div`
    height: 506px;
    width: 392px;
`

const meta: Meta<typeof CheckBox> = {
    component: CheckBox,
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
type Story = StoryObj<typeof CheckBox>

export const Default: Story = {
    args: {},
}

export const Checked: Story = {
    args: {
        checked: true,
        onChange: () => {},
    },
}
