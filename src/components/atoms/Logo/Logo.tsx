import { ASSETS } from '@constants/assets'
import Image from 'next/image'
import React from 'react'

export interface LogoProps {}

export const Logo: React.FC<LogoProps> = (props) => {
    return (
        <Image
            alt="Resumize me logo"
            src={ASSETS.icons.logo}
            width={114.47}
            height={24}
        />
    )
}
