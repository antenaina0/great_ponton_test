import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { SubList } from './SubList'

const StoryContainer = styled.div`
    height: 506px;
    width: 392px;
`

const meta: Meta<typeof SubList> = {
    component: SubList,
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
type Story = StoryObj<typeof SubList>

export const Default: Story = {
    args: {},
}
