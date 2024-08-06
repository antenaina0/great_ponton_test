import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { PickItem } from '../../interfaces/sidebar.interfaces'
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

const mockHeader: PickItem = {
    id: '1',
    type: 'favorite',
    title: 'My Favorite Item',
    header: true,
}
const mockItems: PickItem[] = [
    { id: '2', type: 'board', title: 'Project Board' },
    { id: '3', type: 'locked', title: 'Locked Document', header: true },
    { id: '4', type: 'history', title: 'History Log' },
    { id: '5', type: 'template', title: 'Template File' },
    { id: '6', type: 'search', title: 'Search Result' },
    { id: '7', type: 'drawer', title: 'Drawer Item', header: true },
    { id: '8', type: 'favorite', title: 'Another Favorite' },
    { id: '9', type: 'board', title: 'Team Board' },
    { id: '10', type: 'locked', title: 'Confidential Report' },
]

export const Default: Story = {
    args: {
        header: mockHeader,
        list: mockItems,
    },
}
