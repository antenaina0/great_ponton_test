import { TextArea } from '@components/atoms/inputs'
import { Wrapper } from '@components/atoms/layout'
import { H4 } from '@components/atoms/typographies'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'
import { PERSONAL_INFO_DEFAULT } from './default-values'
import { PersonalInfo } from './personal-info.schema'

export interface PersonalInfoFormProps {}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = (props) => {
    const { control, handleSubmit } = useForm<PersonalInfo>({
        defaultValues: PERSONAL_INFO_DEFAULT,
    })

    const onSubmit: SubmitHandler<PersonalInfo> = (data) => {
        console.log(data)
    }
    return (
        <Container>
            <Heading>Personal Information</Heading>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Wrapper rows={1} columns={2} columnGap="24px">
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                            <TextArea {...field} label="First Name" />
                        )}
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                            <TextArea {...field} label="Last Name" />
                        )}
                    />
                </Wrapper>
                <Wrapper rows={1} columns={2} columnGap="24px">
                    <Controller
                        name="city"
                        control={control}
                        render={({ field }) => (
                            <TextArea {...field} label="City" />
                        )}
                    />
                    <Controller
                        name="postalCode"
                        control={control}
                        render={({ field }) => (
                            <TextArea {...field} label="Postal Code" />
                        )}
                    />
                </Wrapper>
                <Wrapper rows={1} columns={1}>
                    <Controller
                        name="address"
                        control={control}
                        render={({ field }) => (
                            <TextArea {...field} label="Address" />
                        )}
                    />
                </Wrapper>
                <Wrapper rows={1} columns={2} columnGap="24px">
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <TextArea {...field} label="Email" />
                        )}
                    />
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                            <TextArea {...field} label="Phone" />
                        )}
                    />
                </Wrapper>
                <Wrapper rows={1} columns={2} columnGap="24px">
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <TextArea
                                {...field}
                                label="Password"
                                type="password"
                            />
                        )}
                    />
                </Wrapper>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`
const Heading = styled(H4)`
    height: 30px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`
