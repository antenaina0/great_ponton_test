import { H4 } from '@components/atoms/typographies'
import React from 'react'
import styled from 'styled-components'

export interface PersonalInfoFormProps {}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = (props) => {
    return (
        <Container>
            <H4>Personal Information</H4>
        </Container>
    )
}

const Container = styled.div``

const Form = styled.form``
