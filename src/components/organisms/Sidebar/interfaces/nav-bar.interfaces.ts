export type PickItemType =
    | 'favorite'
    | 'board'
    | 'locked'
    | 'history'
    | 'template'
    | 'search'
    | 'drawer'

export interface PickItem {
    id: string
    type: PickItemType
    title: string
    header?: boolean
}

export interface NavBarSubList {
    header: PickItem
    list?: PickItem[]
}
