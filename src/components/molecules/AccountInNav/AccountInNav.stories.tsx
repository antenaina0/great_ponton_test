import { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'
import styled from 'styled-components'
import { AccountInNav } from './AccountInNav'

const StoryContainer = styled.div`
    height: 64px;
    width: 240px;
    border: 1px solid red;
`

const meta: Meta<typeof AccountInNav> = {
    component: AccountInNav,
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
type Story = StoryObj<typeof AccountInNav>

const CarlaPicture = (
    <Image
        src="/mock-cdn/carla-small.png"
        alt="Avatar image of Carla"
        width={32}
        height={32}
    />
)

export const Default: Story = {
    args: {
        username: 'Carla',
        avatar: CarlaPicture,
    },
}
