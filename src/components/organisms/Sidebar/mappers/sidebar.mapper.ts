import { PickIcon } from '../components/PickerItem/icon-attribute.utils'
import { PickerItemProps } from '../components/PickerItem/PickerItem'
import { PickItem, PickItemType } from '../interfaces/sidebar.interfaces'

const pickItemTypeToIconMap: Record<PickItemType, PickIcon> = {
    board: 'folders',
    drawer: 'drawer',
    favorite: 'star',
    history: 'clock',
    locked: 'lock',
    search: 'search',
    template: 'notes',
}

const toIcon = (item: PickItemType): PickIcon => pickItemTypeToIconMap[item]

export const toPickItemProps = (data: PickItem): PickerItemProps => ({
    add: data.type === 'drawer',
    icon: toIcon(data.type),
    important: data.header,
    label: data.title,
})
