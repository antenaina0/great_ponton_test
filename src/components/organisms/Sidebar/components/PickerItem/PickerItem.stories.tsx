import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { PickerItem } from './PickerItem'

const StoryContainer = styled.div`
    height: 32px;
    width: 200px;
    border: 1px solid red;
`

const meta: Meta<typeof PickerItem> = {
    component: PickerItem,
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
type Story = StoryObj<typeof PickerItem>

export const Default: Story = {
    args: {
        label: 'Software Engineer',
    },
}

export const Bold: Story = {
    args: {
        label: 'My Templates',
        important: true,
        icon: 'notes',
    },
}
