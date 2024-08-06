import React, { useMemo } from 'react'
import styled from 'styled-components'
import { PickItem } from '../../interfaces/sidebar.interfaces'
import { toPickItemProps } from '../../mappers/sidebar.mapper'
import { PickerItem } from '../PickerItem/PickerItem'

export interface SubListProps {
    header: PickItem
    list?: PickItem[]
}

export const SubList: React.FC<SubListProps> = (props) => {
    const { header, list = [] } = props

    const headerProps = useMemo(() => {
        return toPickItemProps(header)
    }, [header])

    return (
        <Container>
            <PickerItem {...headerProps} />
            <ListWrapper>
                {list.map((item) => {
                    const props = toPickItemProps(item)
                    return <PickerItem {...props} key={item.id} />
                })}
            </ListWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
