'use server'

import { Sidebar } from '@components/templates/Sidebar'
import { NAV_ITEMS } from './(mocks)/navbar.mocks'

export default async function Home() {
    return <Sidebar sublists={NAV_ITEMS} />
}
