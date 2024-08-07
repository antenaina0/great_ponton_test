import { AccountInNavProps } from '@components/molecules/AccountInNav'
import { NavBarSubList, PickItem } from '@components/organisms/Sidebar'
import Image from 'next/image'
import { BOARDS_MOCK } from './boards.mock'
import { FAVORITES_MOCK } from './favorites.mock'
import { HISTORIES_MOCK } from './histories.mock'

const BOARD_HEADER: PickItem = {
    title: 'My boards',
    type: 'drawer',
    header: true,
    id: 'board1',
}

const SEARCH_HEADER: PickItem = {
    title: 'Search',
    type: 'search',
    header: true,
    id: 'search1',
}
const TEMPLATE_HEADER: PickItem = {
    title: 'My templates',
    type: 'template',
    header: true,
    id: 'template1',
}

export const NAV_ITEMS: NavBarSubList[] = [
    {
        header: TEMPLATE_HEADER,
    },
    {
        header: SEARCH_HEADER,
        list: [...FAVORITES_MOCK, ...HISTORIES_MOCK],
    },
    {
        header: BOARD_HEADER,
        list: BOARDS_MOCK,
    },
]

const CarlaPicture = (
    <Image
        src="/mock-cdn/carla-small.png"
        alt="Avatar image of Carla"
        width={32}
        height={32}
    />
)

export const ACCOUNT: AccountInNavProps = {
    username: 'Carla',
    avatar: CarlaPicture,
}
