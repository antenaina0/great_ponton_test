import { ASSETS } from '@constants/assets'

const { icons } = ASSETS
export type PickIcon =
    | 'clock'
    | 'drawer'
    | 'folders'
    | 'lock'
    | 'notes'
    | 'search'
    | 'star'

type Icon = {
    src: string
    alt: string
    height?: number
    width?: number
}

const iconAttributeMap: Record<PickIcon, Icon> = {
    clock: {
        src: icons.clock,
        alt: 'Clock icon indicating history item',
    },
    drawer: {
        src: icons.drawer,
        alt: 'Drawer icon indicating boards set header',
    },
    folders: {
        src: icons.folders,
        alt: 'Folders icon indicating a board',
        width: 15,
        height: 22,
    },
    lock: {
        src: icons.lock,
        alt: 'Lock icon indicating board you cannot open',
        width: 15,
        height: 22,
    },
    notes: {
        src: icons.notes,
        alt: 'Notes icon indicating template list',
    },
    search: {
        src: icons.search,
        alt: 'Magnifier icon indicating search',
    },
    star: {
        src: icons.star,
        alt: 'Star icon indicating favorites',
        width: 16,
        height: 22,
    },
}

export const getIconAttributes = (icon: PickIcon) => iconAttributeMap[icon]
