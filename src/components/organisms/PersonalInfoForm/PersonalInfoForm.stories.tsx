import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { PersonalInfoForm } from './PersonalInfoForm'

const StoryContainer = styled.div`
    height: 506px;
    width: 392px;
`

const meta: Meta<typeof PersonalInfoForm> = {
    component: PersonalInfoForm,
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
type Story = StoryObj<typeof PersonalInfoForm>

export const Default: Story = {
    args: {},
}
