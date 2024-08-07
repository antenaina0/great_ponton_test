import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { NavBarSubList } from '../../interfaces/nav-bar.interfaces'
import { NavBar } from './NavBar'

const StoryContainer = styled.div`
    height: 506px;
    width: 392px;
`

const meta: Meta<typeof NavBar> = {
    component: NavBar,
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

const navBarSubListMocks: NavBarSubList[] = [
    {
        header: { id: '1', type: 'favorite', title: 'Favorites' },
        list: [
            { id: '1-1', type: 'board', title: 'Dashboard' },
            { id: '1-2', type: 'favorite', title: 'My Projects' },
            { id: '1-3', type: 'locked', title: 'Secure Files' },
            { id: '1-4', type: 'template', title: 'Templates' },
            { id: '1-5', type: 'drawer', title: 'Quick Access' },
            { id: '1-6', type: 'search', title: 'Search History' },
        ],
    },
    {
        header: { id: '2', type: 'board', title: 'Boards' },
        list: [
            { id: '2-1', type: 'board', title: 'Team Board' },
            { id: '2-2', type: 'history', title: 'Recent Boards' },
            { id: '2-3', type: 'template', title: 'Board Templates' },
            { id: '2-4', type: 'locked', title: 'Private Boards' },
            { id: '2-5', type: 'drawer', title: 'Archived Boards' },
            { id: '2-6', type: 'search', title: 'Find a Board' },
            { id: '2-7', type: 'favorite', title: 'Starred Boards' },
            { id: '2-8', type: 'history', title: 'Board Activity' },
        ],
    },
    {
        header: { id: '3', type: 'template', title: 'Templates' },
        list: [
            { id: '3-1', type: 'template', title: 'Project Templates' },
            { id: '3-2', type: 'template', title: 'Task Templates' },
            { id: '3-3', type: 'history', title: 'Recent Templates' },
            { id: '3-4', type: 'drawer', title: 'Template Drawer' },
            { id: '3-5', type: 'search', title: 'Search Templates' },
        ],
    },
]

export default meta
type Story = StoryObj<typeof NavBar>

export const Default: Story = {
    args: {
        subLists: navBarSubListMocks,
    },
}
