import { Text } from '@components/atoms/typographies'
import React from 'react'

export interface ContactTeamProps {}

export const ContactTeam: React.FC<ContactTeamProps> = (props) => {
    return (
        <Text $weight="medium">
            Get in touch with our support team if you have any question or want
            to leave some feedback. We’ll be happy to hear from you.
        </Text>
    )
}
